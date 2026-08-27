# frozen_string_literal: true

module Section508
  module Checks
    # Changing a value must not navigate unless the person asks.
    class NoChangeOnInput
      NAVIGATE = /location\s*=|window\.open|document\.location|href\s*=|this\.submit|form\.submit/i

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        Dom.elements(root, "select, input, textarea, [onchange], [oninput]").each do |control|
          handler = "#{control["onchange"]} #{control["oninput"]}"
          return ["Changing this value would change context."] if NAVIGATE.match?(handler)
        end
        []
      end
    end
  end
end
