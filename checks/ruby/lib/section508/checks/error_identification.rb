# frozen_string_literal: true

module Section508
  module Checks
    # A field in error is identified in text, not only a CSS class or aria-invalid.
    class ErrorIdentification
      def self.call(root)
        return [] unless root&.respond_to?(:css)

        fields = Dom.elements(root, "input, select, textarea")
        return ["This section has no field in error."] if fields.empty?

        fields.each do |field|
          next unless in_error?(field)
          return ["The error is not identified in text."] unless error_text?(field, root)
        end

        return ["The error is not identified in text."] unless fields.any? { |field| in_error?(field) }

        []
      end

      def self.in_error?(field)
        field["aria-invalid"] == "true" || Dom.has_class?(field, "invalid")
      end

      def self.error_text?(field, root)
        ids = field["aria-describedby"].to_s.split(/\s+/).reject(&:empty?)
        from_ids = ids.map { |id| node = Dom.by_id(root, id); node ? Dom.text(node) : "" }.join(" ")
        return true unless from_ids.gsub(/\s+/, " ").strip.empty?

        Dom.elements(root, "p, div, span, strong").any? do |node|
          /error|missing|invalid|required|must /i.match?(Dom.text(node))
        end
      end
    end
  end
end
