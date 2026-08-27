# frozen_string_literal: true

module Section508
  module Checks
    # The link name must say where it goes.
    class LinkPurpose
      WEAK = /^(click here|here|read more|more|learn more|click|link|this link)$/i

      def self.link_name(link)
        name = Dom.norm(link)
        return name unless name.empty?

        Dom.attr(link, "aria-label").to_s.gsub(/\s+/, " ").strip
      end
      private_class_method :link_name

      def self.call(root)
        return [] unless root
        return [] unless root.respond_to?(:css)

        links = Dom.elements(root, "a[href]")
        return ["This section has no link."] if links.empty?

        links.each do |link|
          name = link_name(link)
          return ["This link has no text name."] if name.empty?
          return ["“#{name}” does not name the destination."] if WEAK.match?(name)
        end
        []
      end
    end
  end
end
