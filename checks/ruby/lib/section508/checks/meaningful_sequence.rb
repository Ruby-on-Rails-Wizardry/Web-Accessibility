# frozen_string_literal: true

module Section508
  module Checks
    # CSS that reorders source away from reading order.
    class MeaningfulSequence
      REORDER_CLASS = /\b(pull-up|pull-left|visually-first|css-order)\b/i
      REORDER_STYLE = /(?:^|;)\s*order\s*:\s*(?!0\s*(?:;|$))/i
      REVERSE = /flex-direction\s*:\s*(row|column)-reverse/i

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        nodes = []
        nodes << root if Dom.element?(root)
        nodes.concat(Dom.elements(root, "*"))
        nodes.each do |element|
          class_name = element["class"].to_s
          style = element["style"].to_s
          if REORDER_CLASS.match?(class_name) || REORDER_STYLE.match?(style) || REVERSE.match?(style)
            return ["CSS reorders this content away from the DOM sequence."]
          end
        end
        []
      end
    end
  end
end
