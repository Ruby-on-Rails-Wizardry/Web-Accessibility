# frozen_string_literal: true

module Section508
  module Checks
    # A grid of figures is a table with th, not only td, and not a stack of divs.
    class DataTables
      def self.call(root)
        return [] unless root

        tables = Dom.elements(root, "table")
        if tables.any?
          bare = tables.find { |table| !table.at_css("th") }
          return [] unless bare

          return ["This table has no header cells (th)."]
        end

        return ["This grid of figures is not a data table with headers."] if looks_like_grid?(root)

        []
      end

      def self.looks_like_grid?(root)
        rows = Dom.elements(root, "div").select do |element|
          next false if Dom.closest(element, "table, ul, ol, dl")

          cells = element.element_children.select do |child|
            %w[DIV SPAN P].include?(child.name.upcase) && !child.at_css("div, table")
          end
          cells.length >= 2
        end
        rows.length >= 2
      end
    end
  end
end
