# frozen_string_literal: true

module Section508
  module Checks
    # A phrase not in the surrounding language needs lang on the element that contains it.
    class LanguageOfParts
      def self.call(root)
        return [] unless root&.respond_to?(:css)

        switched = lang_nodes(root).any? do |element|
          ancestor = parent_lang(element)
          next false unless ancestor

          around = ancestor["lang"].to_s
          here = element["lang"].to_s
          !here.empty? && !around.empty? && here != around
        end

        return [] if switched

        ["A phrase in another language is not marked with lang."]
      end

      def self.lang_nodes(root)
        list = []
        list << root if Dom.element?(root) && Dom.has_attr?(root, "lang")
        list.concat(Dom.elements(root, "[lang]"))
        list
      end

      def self.parent_lang(element)
        parent = Dom.parent_element(element)
        return nil unless parent

        Dom.closest(parent, "[lang]")
      end
    end
  end
end
