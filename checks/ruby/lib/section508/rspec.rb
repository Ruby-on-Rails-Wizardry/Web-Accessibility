# frozen_string_literal: true

require "rspec/expectations"

RSpec::Matchers.define :meet_section508 do |rules_or_id = nil, **opts|
  match do |actual|
    rules = opts[:rules]
    profile = opts[:profile]
    case rules_or_id
    when String
      rules = [rules_or_id]
    when Array
      rules = rules_or_id
    end
    @result = Section508.check(actual, rules: rules, profile: profile)
    @result.ok?
  end

  failure_message do
    lines = Array(@result&.failures).map do |failure|
      details = Array(failure.details).join(" ")
      "#{failure.id}: #{details}"
    end
    "expected to meet Section 508, but failed:\n#{lines.join("\n")}"
  end

  failure_message_when_negated do
    "expected not to meet Section 508"
  end
end
