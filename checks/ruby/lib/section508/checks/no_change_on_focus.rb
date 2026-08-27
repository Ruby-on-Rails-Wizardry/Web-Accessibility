# frozen_string_literal: true

module Section508
  module Checks
    # Focusing a control must not navigate or rebuild the page.
    class NoChangeOnFocus
      NAVIGATE = /location\s*=|window\.open|document\.location|href\s*=/i

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        Dom.elements(root, "select, input, textarea, button, a, [tabindex], [onfocus]").each do |control|
          handler = control["onfocus"].to_s
          return ["Focus on this control would change context."] if NAVIGATE.match?(handler)
        end
        []
      end
    end
  end
end
