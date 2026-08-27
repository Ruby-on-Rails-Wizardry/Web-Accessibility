# frozen_string_literal: true

module Section508
  module Checks
    # Name, role, and value for custom widgets only.
    class NameRoleValue
      STATE_FOR = {
        "tab" => "aria-selected",
        "checkbox" => "aria-checked",
        "radio" => "aria-checked",
        "switch" => "aria-checked",
        "menuitemcheckbox" => "aria-checked",
        "slider" => "aria-valuenow"
      }.freeze

      CLASS_WIDGET = /\b(tab|tabs|switch|accordion|menu-item|menuitem)\b/i
      NATIVE = %w[BUTTON A INPUT SELECT TEXTAREA SUMMARY].freeze

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        widgets = find_widgets(root)
        return [] if widgets.empty?

        widgets.each do |widget|
          role = widget["role"].to_s.downcase
          return ["“#{hint(widget)}” has no role."] if role.empty?
          return ["“#{hint(widget)}” has no name."] unless named?(widget, root)

          state = STATE_FOR[role]
          return ["“#{hint(widget)}” has no #{state}."] if state && !Dom.has_attr?(widget, state)
        end
        []
      end

      def self.find_widgets(root)
        Dom.elements(root, "div, span, button, a, [role]").select do |element|
          if Dom.closest(element, "button, a[href], label") && !%w[BUTTON A].include?(element.name.upcase)
            next false
          end

          role = element["role"].to_s.downcase
          next true if STATE_FOR.key?(role) || role == "menuitem"
          next true if CLASS_WIDGET.match?(element["class"].to_s) && !native?(element)
          next true if !native?(element) && (Dom.has_attr?(element, "aria-selected") || Dom.has_attr?(element, "aria-checked"))

          false
        end
      end

      def self.native?(element)
        NATIVE.include?(element.name.upcase)
      end

      def self.named?(element, root)
        aria = element["aria-label"].to_s.gsub(/\s+/, " ").strip
        return true unless aria.empty?

        ids = element["aria-labelledby"].to_s.split(/\s+/).reject(&:empty?)
        return true if ids.any? { |id| (node = Dom.by_id(root, id)) && !Dom.text(node).strip.empty? }

        !Dom.norm(element).empty?
      end

      def self.hint(element)
        Dom.norm(element).then { |text| text.empty? ? nil : text } ||
          element["aria-label"] ||
          element["class"] ||
          element.name.downcase
      end
    end
  end
end
