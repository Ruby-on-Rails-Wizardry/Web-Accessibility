# frozen_string_literal: true

module Section508
  module Checks
    # Autoplay media longer than a moment needs an immediate pause.
    class AudioControl
      def self.call(root)
        return [] unless root&.respond_to?(:css)

        media = Dom.elements(root, "audio, video")
        return ["This section has no audio."] if media.empty?

        media.each do |element|
          next unless Dom.has_attr?(element, "autoplay")
          next if Dom.has_attr?(element, "controls")

          if root.at_css("button, [aria-label]")
            pause = Dom.elements(root, "button, [aria-label]").any? do |node|
              /pause|stop|mute/i.match?("#{node.text} #{node["aria-label"]}")
            end
            next if pause
          end
          return ["Audio starts on its own and has no pause control."]
        end
        []
      end
    end
  end
end
