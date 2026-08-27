# frozen_string_literal: true

module Section508
  module Checks
    # Visible text of the control must appear in the accessible name.
    class LabelInName
      def self.call(root)
        return [] unless root&.respond_to?(:css)

        Dom.elements(root, "button, a[href], input, select, textarea").each do |control|
          visible = visible_text(control, root)
          next if visible.empty?

          name = accessible_name(control, root)
          unless name.downcase.include?(visible.downcase)
            return ["The visible text “#{visible}” is not in the accessible name “#{name}”."]
          end
        end
        []
      end

      def self.visible_text(control, root)
        if %w[BUTTON A].include?(control.name.upcase)
          return Dom.norm(control)
        end

        id = control["id"]
        if id && !id.empty?
          label = Dom.label_for(root, id)
          return Dom.norm(label) if label
        end

        wrap = Dom.closest(control, "label")
        return "" unless wrap

        Dom.label_text(wrap, control)
      end

      def self.accessible_name(control, root)
        if Dom.has_attr?(control, "aria-label")
          return control["aria-label"].to_s.gsub(/\s+/, " ").strip
        end

        labelledby = control["aria-labelledby"]
        if labelledby && !labelledby.empty?
          text = labelledby.split(/\s+/).map { |id| node = Dom.by_id(root, id); node ? Dom.text(node) : "" }.join(" ")
          return text.gsub(/\s+/, " ").strip
        end

        return Dom.norm(control) if %w[BUTTON A].include?(control.name.upcase)

        visible_text(control, root)
      end
    end
  end
end
