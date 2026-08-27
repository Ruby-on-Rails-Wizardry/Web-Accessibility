# frozen_string_literal: true

module Section508
  # Small DOM helpers so cops can follow the JS querySelector style on Nokogiri.
  module Dom
    module_function

    def element?(node)
      node.is_a?(Nokogiri::XML::Element)
    end

    def elements(root, selector)
      return [] unless root.respond_to?(:css)

      root.css(selector).select { |node| element?(node) }
    end

    def first(root, selector)
      elements(root, selector).first
    end

    def elements_including_self(root, selector)
      list = []
      list << root if matches?(root, selector)
      list.concat(elements(root, selector))
      list
    end

    def matches?(node, selector)
      return false unless element?(node)

      if node.respond_to?(:matches?)
        node.matches?(selector)
      else
        parent = node.parent
        parent && parent.respond_to?(:css) && parent.css(selector).include?(node)
      end
    rescue Nokogiri::CSS::SyntaxError, ArgumentError
      false
    end

    def closest(node, selector)
      current = node
      while element?(current)
        return current if matches?(current, selector)

        current = current.parent
      end
      nil
    end

    def parent_element(node)
      parent = node.parent
      parent if element?(parent)
    end

    def tag(node)
      node.name.to_s.upcase
    end

    def attr(node, name)
      node[name.to_s]
    end

    def has_attr?(node, name)
      node.key?(name.to_s)
    end

    def has_class?(node, name)
      node["class"].to_s.split.include?(name)
    end

    def text(node)
      node.text.to_s
    end

    def norm(node)
      text(node).gsub(/\s+/, " ").strip
    end

    def own_text(node, remove: "script, style")
      clone = node.dup
      clone.css(remove).each(&:remove) if remove
      clone.text.to_s.gsub(/\s+/, " ").strip
    end

    def by_id(root, id)
      return nil if id.nil? || id.to_s.empty?
      return root if element?(root) && root["id"] == id

      elements(root, "[id]").find { |node| node["id"] == id }
    end

    def label_for(root, id)
      return nil if id.nil? || id.to_s.empty?

      elements(root, "label[for]").find { |node| node["for"] == id }
    end

    def associated_label_text(control, root)
      wrap = closest(control, "label")
      wrapped = wrap && label_text(wrap, control)
      return wrapped if wrapped && !wrapped.empty?

      id = control["id"]
      return nil if id.nil? || id.empty?

      label = label_for(root, id)
      return nil unless label

      text = norm(label)
      text unless text.empty?
    end

    def has_associated_visible_label?(control, root)
      !associated_label_text(control, root).to_s.empty?
    end

    def label_text(label, _control)
      clone = label.dup
      clone.css("input, select, textarea, button").each(&:remove)
      clone.text.to_s.gsub(/\s+/, " ").strip
    end

    def field_hint(control)
      type = (control["type"] || control.name.to_s).to_s.gsub(/\s+/, " ")
      name = (control["name"] || control["id"] || type).to_s.strip
      name.empty? ? "this field" : name
    end

    def described_text(element, root)
      ids = element["aria-describedby"].to_s.split(/\s+/).reject(&:empty?)
      ids.map { |id| by_id(root, id) }.compact.map { |node| text(node) }.join(" ")
    end

    def labelledby_text(element, root)
      ids = element["aria-labelledby"].to_s.split(/\s+/).reject(&:empty?)
      ids.map { |id| by_id(root, id) }.compact.map { |node| text(node) }.join(" ").gsub(/\s+/, " ").strip
    end
  end
end
