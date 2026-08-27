# frozen_string_literal: true

module Section508
  module Checks
    # The first focusable control in the specimen jumps to unique content.
    class SkipLink
      def self.call(root)
        return [] unless root&.respond_to?(:css)

        focusable = focusable_controls(root)
        return ["There is no skip link."] if focusable.empty?

        first = focusable.first
        href = first["href"].to_s
        name = "#{first.text} #{first["aria-label"]}".gsub(/\s+/, " ").strip

        unless href.start_with?("#") && href.length >= 2 && /skip/i.match?(name)
          return ["The first control is not a skip link."]
        end

        id = href[1..]
        target = (Dom.element?(root) && root["id"] == id) ? root : Dom.by_id(root, id)
        return ["The skip link does not point at an element in this section."] unless target

        []
      end

      def self.focusable_controls(root)
        Dom.elements(root, "a[href], button, input, select, textarea, [tabindex]").select do |element|
          primary = native_focusable?(element)
          next false if !primary && element["tabindex"] == "-1"
          next false if Dom.has_attr?(element, "disabled")
          next false if Dom.has_attr?(element, "hidden")
          next false if element["aria-hidden"] == "true"

          style = element["style"].to_s.gsub(/\s+/, "")
          next false if /display:none/i.match?(style) || /visibility:hidden/i.match?(style)

          true
        end
      end

      def self.native_focusable?(element)
        name = element.name.upcase
        return true if %w[BUTTON INPUT SELECT TEXTAREA].include?(name)

        name == "A" && Dom.has_attr?(element, "href")
      end
    end
  end
end
