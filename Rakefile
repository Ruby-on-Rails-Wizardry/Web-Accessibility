# middleman-gh-pages publishes to REMOTE_NAME (default origin).
# This clone uses named remotes; github is canonical.
ENV["REMOTE_NAME"] ||= "github"

require "middleman-gh-pages"

task default: %w[build]

desc "Build the static site into ./build"
task :build do
  sh "bundle exec middleman build"
end
