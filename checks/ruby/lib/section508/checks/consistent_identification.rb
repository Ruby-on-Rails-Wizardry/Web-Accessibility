# frozen_string_literal: true

module Section508
  module Checks
    # The same function keeps the same name.
    class ConsistentIdentification
      GROUPS = [
        [/print/i, /download pdf/i, /save pdf/i, /export pdf/i],
        [/search/i, /\bfind\b/i],
        [/log ?in/i, /sign in/i],
        [/submit/i, /send form/i]
      ].freeze

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        names = Dom.elements(root, "button, a[href]").map do |element|
          (element["aria-label"] || element.text).to_s.gsub(/\s+/, " ").strip
        end.reject(&:empty?)

        return ["This section has only one named control."] if names.length < 2

        GROUPS.each do |group|
          hits = names.select { |name| group.any? { |pattern| pattern.match?(name) } }
          unique = hits.map(&:downcase).uniq
          if unique.length > 1
            return ["“#{hits[0]}” and “#{hits[1]}” name the same action differently."]
          end
        end
        []
      end
    end
  end
end
