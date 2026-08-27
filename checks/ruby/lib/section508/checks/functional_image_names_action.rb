# frozen_string_literal: true

module Section508
  module Checks
    # When the image is the control, alt names the destination or action.
    class FunctionalImageNamesAction
      WEAK = /^(logo|icon|image|photo|picture|graphic)$/i

      def self.call(root)
        return [] unless root
        return [] unless root.respond_to?(:css)

        controls = Dom.elements(root, "a[href], button").select { |element| element.at_css("img") }
        return ["This section has no image that is a link or button."] if controls.empty?

        controls.each do |control|
          image = control.at_css("img")
          extra = control_text_without_image(control)
          next unless extra.empty?

          return ["This image control has no alt attribute."] unless Dom.has_attr?(image, "alt")

          alt = image["alt"].to_s.gsub(/\s+/, " ").strip
          return ["This image control has empty alt, so the link or button has no name."] if alt.empty?
          return ["“#{alt}” does not name the destination or the action."] if WEAK.match?(alt)
        end
        []
      end

      def self.control_text_without_image(control)
        clone = control.dup
        clone.css("img").each(&:remove)
        clone.text.to_s.gsub(/\s+/, " ").strip
      end
    end
  end
end
