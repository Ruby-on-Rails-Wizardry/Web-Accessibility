# frozen_string_literal: true

module Section508
  module Checks
    # A widget that takes Tab must also give it back. data-trap marks the miss.
    class NoKeyboardTrap
      def self.call(root)
        return [] unless root&.respond_to?(:css)
        return [] if Dom.elements(root, "[data-trap]").empty?

        ["This component traps Tab with no keyboard way out."]
      end
    end
  end
end
