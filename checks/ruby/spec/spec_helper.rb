# frozen_string_literal: true

require "bundler/setup"

$LOAD_PATH.unshift File.expand_path("../lib", __dir__)

require "section508"
require "section508/rspec"
require "section508/minitest"
