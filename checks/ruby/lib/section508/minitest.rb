# frozen_string_literal: true

module Section508
  module Minitest
    def assert_section508(source, rules: nil, profile: nil)
      result = Section508.check(source, rules: rules, profile: profile)
      return if result.ok?

      lines = result.failures.map do |failure|
        "#{failure.id}: #{Array(failure.details).join(" ")}"
      end
      message = "expected to meet Section 508, but failed:\n#{lines.join("\n")}"
      assert false, message
    end
  end
end
