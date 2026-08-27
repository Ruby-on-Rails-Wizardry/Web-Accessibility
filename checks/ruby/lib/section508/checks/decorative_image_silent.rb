# frozen_string_literal: true

module Section508
  module Checks
    # Ornament is silent. Missing alt is not empty alt.
    class DecorativeImageSilent
      def self.call(root)
        return [] unless root
        return [] unless root.respond_to?(:css)

        images = Dom.elements(root, "img")
        return ["This section has no decorative image."] if images.empty?

        images.each do |image|
          return ["This decorative image is missing the alt attribute."] unless Dom.has_attr?(image, "alt")

          alt = image["alt"]
          next if alt == ""

          shown = alt.to_s.gsub(/\s+/, " ").strip
          shown = "text" if shown.empty?
          return ["“#{shown}” will be announced. Decorative images need empty alt."]
        end
        []
      end
    end
  end
end
