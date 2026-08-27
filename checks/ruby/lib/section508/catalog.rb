# frozen_string_literal: true

require "yaml"

module Section508
  module Catalog
    PATH = File.expand_path("../../../catalog.yml", __dir__)

    module_function

    def data
      @data ||= YAML.safe_load_file(PATH) || {}
    end

    def rules
      Array(data["rules"])
    end

    def by_id
      @by_id ||= rules.each_with_object({}) { |rule, map| map[rule["id"]] = rule }
    end

    def rule_ids(rules: nil, profile: nil)
      ids = if rules.nil? || (rules.respond_to?(:empty?) && rules.empty?)
              self.rules.map { |rule| rule["id"] }
            else
              Array(rules).map(&:to_s)
            end
      if profile
        ids = ids.select { |id| Array(by_id.dig(id, "profiles")).include?(profile) }
      end
      ids
    end
  end
end
