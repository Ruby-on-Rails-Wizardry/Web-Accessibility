# frozen_string_literal: true

module Section508
  module Checks
    # The action must not run on down-event.
    class PointerCancellation
      def self.call(root)
        return [] unless root&.respond_to?(:css)

        Dom.elements(root, "[ontouchstart], [onmousedown]").each do |element|
          handler = "#{element["ontouchstart"]} #{element["onmousedown"]}"
          if handler.gsub(/\s+/, "").length.positive?
            return ["“#{hint(element)}” completes on the down-event."]
          end
        end
        []
      end

      def self.hint(element)
        raw = element.text
        raw = nil if raw.empty?
        (raw || element.name.downcase).to_s.gsub(/\s+/, " ").strip
      end
    end
  end
end
