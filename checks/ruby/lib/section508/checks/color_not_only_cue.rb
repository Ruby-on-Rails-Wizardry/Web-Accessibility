# frozen_string_literal: true

module Section508
  module Checks
    # A field marked invalid/required must also have a non-color cue.
    class ColorNotOnlyCue
      def self.call(root)
        return [] unless root&.respond_to?(:css)

        marked = Dom.elements(root, ".invalid, .error, .required, [aria-invalid='true']")
        return ["Color is the only cue."] if marked.empty?

        marked.each do |element|
          return ["Color is the only cue for this meaning."] unless non_color_cue?(element, root)
        end
        []
      end

      def self.non_color_cue?(element, root)
        described = Dom.described_text(element, root)
        label = label_text(element, root)
        blob = "#{element.text} #{label} #{described}"
        /\*|required|error|invalid|missing|must /i.match?(blob)
      end

      def self.label_text(element, root)
        wrap = Dom.closest(element, "label")
        return wrap.text if wrap

        id = element["id"]
        return "" if id.nil? || id.empty?

        label = Dom.label_for(root, id)
        label ? label.text : ""
      end
    end
  end
end
