# frozen_string_literal: true

require_relative "section508/version"
require_relative "section508/result"
require_relative "section508/catalog"
require_relative "section508/dom"
require_relative "section508/document"

Dir[File.expand_path("section508/checks/*.rb", __dir__)].sort.each { |path| require path }

require_relative "section508/runner"

module Section508
  module_function

  def check(source, rules: nil, profile: nil)
    root = Document.from(source)
    ids = Catalog.rule_ids(rules: rules, profile: profile)
    Runner.run(root, ids)
  end
end
