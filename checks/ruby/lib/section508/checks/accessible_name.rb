# frozen_string_literal: true

module Section508
  module Checks
    # Every control has a programmatic name.
    class AccessibleName
      WIDGET_ROLES = %w[
        button link checkbox radio tab menuitem switch combobox slider searchbox textbox
      ].freeze

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        controls = find_controls(root)
        return ["This section has no control to name."] if controls.empty?

        controls.each do |control|
          unless named?(control, root)
            return ["“#{hint(control)}” has no programmatic name."]
          end
        end
        []
      end

      def self.find_controls(root)
        natives = Dom.elements(root, "button, a[href], input, select, textarea, summary").select do |element|
          next true unless element.name.upcase == "INPUT"

          (element["type"] || "text").downcase != "hidden"
        end

        fakes = Dom.elements(root, "div, span, a, img").select do |element|
          next false if natives.include?(element)
          next false if Dom.closest(element, "button, a[href], label, summary")
          next false if element.at_css("button, a[href], input, select, textarea")
          next true if Dom.has_attr?(element, "onclick")

          role = element["role"].to_s.downcase
          next true if WIDGET_ROLES.include?(role)

          tabindex = element["tabindex"]
          !tabindex.nil? && number(tabindex) >= 0
        end

        natives + fakes
      end

      def self.named?(control, root)
        aria = control["aria-label"].to_s.gsub(/\s+/, " ").strip
        return true unless aria.empty?

        ids = control["aria-labelledby"].to_s.split(/\s+/).reject(&:empty?)
        if ids.any?
          text = ids.map { |id| node = Dom.by_id(root, id); node ? Dom.text(node) : "" }.join(" ")
          return true unless text.gsub(/\s+/, " ").strip.empty?
        end

        return !control["alt"].to_s.strip.empty? if control.name.upcase == "IMG"

        if control.name.upcase == "INPUT"
          type = (control["type"] || "text").downcase
          if %w[submit button reset].include?(type)
            return true unless control["value"].to_s.strip.empty?
            return type == "submit" || type == "reset"
          end
          return !control["alt"].to_s.strip.empty? if type == "image"

          return labeled?(control, root) || !control["title"].to_s.strip.empty?
        end

        if %w[SELECT TEXTAREA].include?(control.name.upcase)
          return labeled?(control, root) || !control["title"].to_s.strip.empty?
        end

        role = control["role"].to_s.downcase
        native_named = %w[BUTTON A SUMMARY].include?(control.name.upcase)
        return false unless native_named || WIDGET_ROLES.include?(role)

        return true unless own_text(control).empty?

        image = control.at_css("img")
        image && !image["alt"].to_s.strip.empty?
      end

      def self.labeled?(control, root)
        wrap = Dom.closest(control, "label")
        return true if wrap && !Dom.label_text(wrap, control).empty?

        id = control["id"]
        return false if id.nil? || id.empty?

        label = Dom.label_for(root, id)
        label && !Dom.norm(label).empty?
      end

      def self.own_text(element)
        clone = element.dup
        clone.css("script, style").each(&:remove)
        clone.text.to_s.gsub(/\s+/, " ").strip
      end

      def self.hint(control)
        (
          own_text(control).then { |text| text.empty? ? nil : text } ||
          control["aria-label"] ||
          control["id"] ||
          control["name"] ||
          control.name.downcase
        ).to_s.gsub(/\s+/, " ").strip
      end

      def self.number(value)
        Float(value)
      rescue ArgumentError, TypeError
        Float::NAN
      end
    end
  end
end
