# frozen_string_literal: true

module Section508
  module Checks
    # Personal fields need an autocomplete token.
    class InputPurpose
      PERSONAL_TYPES = { "email" => "email", "tel" => "tel" }.freeze
      PERSONAL_NAME = /^(email|name|given-name|family-name|tel|phone|address|street-address)$/i
      TOKENS = /^(name|honorific-prefix|given-name|additional-name|family-name|honorific-suffix|nickname|username|new-password|current-password|organization-title|organization|street-address|address-line1|address-line2|address-line3|address-level4|address-level3|address-level2|address-level1|country|country-name|postal-code|cc-name|cc-given-name|cc-additional-name|cc-family-name|cc-number|cc-exp|cc-exp-month|cc-exp-year|cc-csc|cc-type|transaction-currency|transaction-amount|language|bday|bday-day|bday-month|bday-year|sex|url|photo|tel|tel-country-code|tel-national|tel-area-code|tel-local|tel-local-prefix|tel-local-suffix|tel-extension|impp|email)$/i

      def self.call(root)
        return [] unless root&.respond_to?(:css)

        fields = Dom.elements(root, "input, textarea, select").select { |field| personal?(field) }
        return ["This section has no personal name, email, or address field."] if fields.empty?

        fields.each do |field|
          token = field["autocomplete"].to_s.strip.split(/\s+/).last
          if token.nil? || token.empty? || %w[off on].include?(token.downcase)
            return ["“#{hint(field)}” needs an autocomplete token."]
          end
          return ["“#{token}” is not a recognized input-purpose token."] unless TOKENS.match?(token)
        end
        []
      end

      def self.personal?(field)
        type = (field["type"] || "text").downcase
        return true if PERSONAL_TYPES[type]

        key = "#{field["name"]} #{field["id"]} #{field["autocomplete"]}"
        PERSONAL_NAME.match?(field["name"].to_s) || PERSONAL_NAME.match?(field["id"].to_s) || /email|name|tel|phone|address/i.match?(key)
      end

      def self.hint(field)
        (field["id"] || field["name"] || field["type"] || "this field").to_s.strip
      end
    end
  end
end
