# frozen_string_literal: true

module Section508
  module Checks
    # A confirmation or progress line needs a live region.
    class StatusMessages
      MESSAGE = /saved|error|items in cart|loading|success|thank you|updated|complete/i

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        messages = Dom.elements(root, "div, p, output, span").select do |element|
          MESSAGE.match?(element.text.to_s)
        end
        return ["This section has no status message."] if messages.empty?

        messages.each do |element|
          role = element["role"].to_s.downcase
          live = element["aria-live"].to_s.downcase
          next if %w[status alert].include?(role) || %w[polite assertive].include?(live)

          return ["The status message is not a live region."]
        end
        []
      end
    end
  end
end
