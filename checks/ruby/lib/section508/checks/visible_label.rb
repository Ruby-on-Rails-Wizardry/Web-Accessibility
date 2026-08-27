# frozen_string_literal: true

module Section508
  module Checks
    # Each text field has an associated visible label (for/id or a wrapping label).
    class VisibleLabel
      SKIP_INPUT_TYPES = %w[hidden submit button reset image].freeze

      def self.call(root)
        return [] unless root

        controls = unlabeled_controls(root)
        return [] if controls.empty?

        sample = Dom.field_hint(controls.first)
        ["“#{sample}” has no associated visible label."]
      end

      def self.unlabeled_controls(root)
        return [] unless root.respond_to?(:css)

        Dom.elements(root, "input, select, textarea").select do |element|
          if element.name.upcase == "INPUT"
            type = (element["type"] || "text").downcase
            next false if SKIP_INPUT_TYPES.include?(type)
          end
          !Dom.has_associated_visible_label?(element, root)
        end
      end
    end
  end
end
