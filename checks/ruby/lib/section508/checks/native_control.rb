# frozen_string_literal: true

module Section508
  module Checks
    # A clickable job uses button, a[href], or an input.
    class NativeControl
      def self.call(root)
        return [] unless root

        fakes = fake_controls(root)
        return [] if fakes.empty?

        sample = Dom.norm(fakes.first)
        sample = fakes.first.name.downcase if sample.empty?
        ["“#{sample}” is not a native button, link, or input."]
      end

      def self.fake_controls(root)
        return [] unless root.respond_to?(:css)

        Dom.elements(root, "div, span, a").select do |element|
          next false if element.at_css("button, a[href], input, select, textarea")
          next false if Dom.closest(element, "button, a[href], label")

          if element.name.upcase == "A"
            href = element["href"]
            href.nil? || href.strip.empty?
          elsif Dom.has_attr?(element, "onclick")
            true
          else
            element["role"].to_s.downcase == "button"
          end
        end
      end
    end
  end
end
