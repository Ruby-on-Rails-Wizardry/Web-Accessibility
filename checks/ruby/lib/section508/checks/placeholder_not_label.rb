# frozen_string_literal: true

module Section508
  module Checks
    # Placeholder must not be the only label.
    class PlaceholderNotLabel
      SKIP_INPUT_TYPES = %w[hidden submit button reset image].freeze

      def self.call(root)
        return [] unless root

        offenders = placeholder_only_controls(root)
        return [] if offenders.empty?

        sample = Dom.field_hint(offenders.first)
        ["“#{sample}” uses placeholder as the only label."]
      end

      def self.placeholder_only_controls(root)
        return [] unless root.respond_to?(:css)

        Dom.elements(root, "input, select, textarea").select do |element|
          if element.name.upcase == "INPUT"
            type = (element["type"] || "text").downcase
            next false if SKIP_INPUT_TYPES.include?(type)
          end
          placeholder = element["placeholder"].to_s.strip
          next false if placeholder.empty?

          !Dom.has_associated_visible_label?(element, root)
        end
      end
    end
  end
end
