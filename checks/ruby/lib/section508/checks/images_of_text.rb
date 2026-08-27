# frozen_string_literal: true

module Section508
  module Checks
    # Words that are the content should be real text.
    class ImagesOfText
      TEXT_SRC = /headline|banner-text|sale-title|heading-img|text-banner|hours-sign|promo-text|word-art|slogan|title-banner/i
      LOGO = /logo|wordmark|seal|brand-mark/i

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        Dom.elements(root, "img").each do |image|
          src = image["src"].to_s
          alt = image["alt"].to_s
          next if LOGO.match?(src) || LOGO.match?(alt)
          return ["These words are an image of text, not real text."] if TEXT_SRC.match?(src)
        end
        []
      end
    end
  end
end
