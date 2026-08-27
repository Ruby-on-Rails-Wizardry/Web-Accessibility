# frozen_string_literal: true

require "yaml"

DATA_DIR = File.expand_path("../../../data", __dir__)

FAMILY_RULES = {
  "headings" => %w[heading-elements heading-order],
  "form_errors" => %w[error-identification error-suggestion],
  "no_unexpected_change" => %w[no-change-on-focus no-change-on-input],
  "keyboard_access" => %w[keyboard-operable no-keyboard-trap]
}.freeze

def rules_for(slug)
  FAMILY_RULES[slug] || [slug.tr("_", "-")]
end

def snippets(list)
  Array(list).map { |item| item.to_s.strip }.reject(&:empty?)
end

Dir[File.join(DATA_DIR, "*_pick.yml")].sort.each do |file|
  slug = File.basename(file, "_pick.yml")
  rules = rules_for(slug)
  pool = YAML.safe_load_file(file) || {}
  bad = snippets(pool["bad"])
  good = snippets(pool["good"])

  RSpec.describe slug do
    bad.each_with_index do |html, index|
      it "bad #{index} fails #{rules.join(", ")}" do
        result = Section508.check(html, rules: rules)
        expect(result.ok?).to eq(false), -> { result.failures.inspect }
      end
    end

    good.each_with_index do |html, index|
      it "good #{index} passes #{rules.join(", ")}" do
        result = Section508.check(html, rules: rules)
        expect(result.ok?).to eq(true), -> { result.failures.inspect }
      end
    end
  end
end
