# frozen_string_literal: true

module Section508
  module Checks
    # Do not skip a heading level inside the given node.
    class HeadingOrder
      SELECTOR = "h1, h2, h3, h4, h5, h6"

      def self.call(root)
        headings = headings_in(root)
        return [] if headings.empty?

        details = []
        previous = level(headings.first)
        headings.drop(1).each do |node|
          current = level(node)
          details << "This section goes from h#{previous} to h#{current}." if current > previous + 1
          previous = current
        end
        details
      end

      def self.headings_in(root)
        return [] unless root

        list = []
        list << root if Dom.element?(root) && Dom.matches?(root, SELECTOR)
        list.concat(Dom.elements(root, SELECTOR))
        list
      end

      def self.level(node)
        node.name.to_s[1].to_i
      end
    end
  end
end
