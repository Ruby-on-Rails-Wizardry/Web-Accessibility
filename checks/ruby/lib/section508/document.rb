# frozen_string_literal: true

require "nokogiri"

module Section508
  module Document
    WRAPPER_ID = "section508-root"

    module_function

    def from(source)
      case source
      when String
        parse_html(source)
      when Nokogiri::XML::Document
        source.at_css("body") || source.root
      when Nokogiri::XML::Node
        source
      else
        from_duck(source)
      end
    end

    def from_duck(source)
      if source.respond_to?(:native)
        native = source.native
        return native if native.is_a?(Nokogiri::XML::Node)
      end
      if source.respond_to?(:html)
        html = source.html
        return html if html.is_a?(Nokogiri::XML::Node)
        return parse_html(html.to_s)
      end
      if source.respond_to?(:body)
        body = source.body
        return body if body.is_a?(Nokogiri::XML::Node)
        return parse_html(body.to_s)
      end

      raise ArgumentError, "cannot run Section 508 checks on #{source.class}"
    end

    def parse_html(html)
      wrapped = %(<!DOCTYPE html><html><body><div id="#{WRAPPER_ID}">#{html}</div></body></html>)
      parse_document(wrapped).at_css("##{WRAPPER_ID}")
    end

    def parse_document(html)
      if defined?(Nokogiri::HTML5)
        Nokogiri::HTML5::Document.parse(html)
      else
        Nokogiri::HTML4::Document.parse(html)
      end
    end
  end
end
