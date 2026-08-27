# frozen_string_literal: true

module Section508
  module Checks
    # The image has a text alternative that carries the fact.
    class InformativeImageAlt
      WEAK = /^(image|photo|picture|graphic|chart|icon|logo)$/i
      FILENAME = /\.(png|jpe?g|gif|svg|webp)$/i

      def self.call(root)
        return [] unless root

        images = Dom.elements(root, "img")
        return ["This section has no image with a text alternative."] if images.empty?

        images.each do |image|
          return ["This image has no alt attribute."] unless Dom.has_attr?(image, "alt")

          alt = image["alt"].to_s.gsub(/\s+/, " ").strip
          return ["This informative image has empty alt text."] if alt.empty?
          return ["“#{alt}” names the file or format, not the information."] if WEAK.match?(alt) || FILENAME.match?(alt)
        end
        []
      end
    end
  end
end
