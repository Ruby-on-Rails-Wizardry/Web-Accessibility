# frozen_string_literal: true

module Section508
  module Checks
    # Positive tabindex values reorder Tab away from the DOM.
    class FocusOrder
      def self.call(root)
        return [] unless root&.respond_to?(:css)

        positive = Dom.elements(root, "[tabindex]").select do |element|
          value = number(element["tabindex"])
          value.finite? && value > 0
        end
        return ["Positive tabindex values reorder Tab away from the DOM."] if positive.any?

        []
      end

      def self.number(value)
        Float(value)
      rescue ArgumentError, TypeError
        Float::NAN
      end
    end
  end
end
