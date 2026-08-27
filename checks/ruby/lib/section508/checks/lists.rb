# frozen_string_literal: true

module Section508
  module Checks
    # Related items are ul/ol/dl, not a stack of divs or paragraphs.
    class Lists
      def self.call(root)
        return [] unless root
        return [] if real_list?(root)

        fakes = fake_list_items(root)
        return [] if fakes.length < 2

        sample = Dom.norm(fakes.first)
        if sample.empty?
          ["Related items are not marked as a list."]
        else
          ["“#{sample}” and the items next to it are not marked as a list."]
        end
      end

      def self.real_list?(root)
        return false unless root.respond_to?(:css)

        lists = Dom.elements(root, "ul, ol")
        return true if lists.any? { |list| list.element_children.any? { |child| child.name.upcase == "LI" } }

        Dom.elements(root, "dl").any? { |list| list.at_css("dt, dd") }
      end

      def self.fake_list_items(root)
        return [] unless root.respond_to?(:css)

        items = Dom.elements(root, "div, p").select do |element|
          next false if Dom.closest(element, "ul, ol, dl, li, dt, dd")
          next false if element.at_css("ul, ol, dl, p, div, table, h1, h2, h3, h4, h5, h6")

          !Dom.text(element).strip.empty?
        end

        by_parent = items.group_by { |element| element.parent }
        by_parent.each_value do |group|
          return group if group.length >= 2
        end
        []
      end
    end
  end
end
