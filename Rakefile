# middleman-gh-pages publishes to REMOTE_NAME (default origin).
# This clone uses named remotes; github is canonical.
ENV["REMOTE_NAME"] ||= "github"

require "middleman-gh-pages"

task default: %w[test]

desc "Build the static site into ./build"
task :build do
  sh "bundle exec middleman build"
end

desc "Run JS, Ruby, and Python checker tests"
task test: %w[test:js test:ruby test:python]

desc "Build the site and run in-house cops plus chrome presence"
task "test:site" => :build do
  Dir.chdir("checks/javascript") do
    sh({ "BUILD_DIR" => File.join(__dir__, "build") }, "node", "site_audit.js")
  end
end

namespace :test do
  desc "In-house JS checkers (jsdom + pick fixtures)"
  task :js do
    Dir.chdir("checks/javascript") do
      sh "npm test"
    end
  end

  desc "In-house Ruby checkers (RSpec + Nokogiri)"
  task :ruby do
    dir = File.join(__dir__, "checks/ruby")
    Bundler.with_unbundled_env do
      Dir.chdir(dir) do
        sh({ "BUNDLE_GEMFILE" => File.join(dir, "Gemfile") }, "bundle", "exec", "rspec")
      end
    end
  end

  desc "In-house Python checkers (pytest + BeautifulSoup)"
  task :python do
    root = __dir__
    venv = File.join(root, "checks/python/.venv/bin/python")
    python = File.exist?(venv) ? venv : "python3"
    Dir.chdir(File.join(root, "checks/python")) do
      sh python, "-m", "pytest"
    end
  end
end
