# frozen_string_literal: true

module Section508
  module Checks
    # Hover-only or click-only on a non-focusable node fails.
    class KeyboardOperable
      NATIVE = %w[BUTTON A INPUT SELECT TEXTAREA SUMMARY].freeze

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        hover_only = Dom.elements(root, "[onmouseover], [onmouseenter], [onmousemove]")
        hover_only.each do |element|
          return ["“#{hint(element)}” works on hover only."] unless keyboard_reachable?(element)
        end

        clicks = Dom.elements(root, "[onclick]")
        clicks.each do |element|
          next if native?(element) && (element.name.upcase != "A" || Dom.has_attr?(element, "href"))
          return ["“#{hint(element)}” is not reachable from the keyboard."] unless focusable?(element)
        end

        natives = Dom.elements(root, "button, a[href], input, select, textarea, summary")
        if hover_only.empty? && clicks.empty? && natives.empty?
          return ["This section has no keyboard-operable control."]
        end
        []
      end

      def self.keyboard_reachable?(element)
        return true if focusable?(element)

        element.css("button, a[href], input, select, textarea, summary, [tabindex]").any? do |node|
          next true if native?(node) && (node.name.upcase != "A" || Dom.has_attr?(node, "href"))

          node["tabindex"] && node["tabindex"] != "-1"
        end
      end

      def self.focusable?(element)
        return true if native?(element) && (element.name.upcase != "A" || Dom.has_attr?(element, "href"))

        tabindex = element["tabindex"]
        !tabindex.nil? && number(tabindex) >= 0
      end

      def self.native?(element)
        NATIVE.include?(element.name.upcase)
      end

      def self.hint(element)
        raw = element.text
        raw = nil if raw.empty?
        (raw || element["class"] || element.name.downcase).to_s.gsub(/\s+/, " ").strip
      end

      def self.number(value)
        Float(value)
      rescue ArgumentError, TypeError
        Float::NAN
      end
    end
  end
end
