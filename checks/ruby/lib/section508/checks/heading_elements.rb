# frozen_string_literal: true

module Section508
  module Checks
    # Section names are heading elements, not a bold paragraph.
    class HeadingElements
      def self.call(root)
        return [] unless root

        fakes = fake_headings(root)
        return [] if fakes.empty?

        sample = Dom.norm(fakes.first)
        if sample.empty?
          ["A section name is a bold paragraph, not a heading element."]
        else
          ["“#{sample}” is a bold paragraph, not a heading element."]
        end
      end

      def self.fake_headings(root)
        return [] unless root.respond_to?(:css)

        Dom.elements(root, "p, div").select do |element|
          next false if element.at_css("p, div, ul, ol, table, h1, h2, h3, h4, h5, h6")

          significant = element.children.reject { |node| node.text? && node.text.strip.empty? }
          next false unless significant.length == 1

          child = significant.first
          child.element? && %w[STRONG B].include?(child.name.upcase)
        end
      end
    end
  end
end
