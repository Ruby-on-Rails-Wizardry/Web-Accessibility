# Frozen identity lives in data/site.yml — keep this file about Middleman itself.

require "pathname"
require "cgi"
require "uri"

# Rouge 3 (middleman-syntax ~> 3.2) calls CGI.parse for untagged fences.
# Ruby 4 removed CGI.parse.
unless CGI.respond_to?(:parse)
  def CGI.parse(query)
    URI.decode_www_form(query.to_s).each_with_object(Hash.new { |h, k| h[k] = [] }) do |(key, val), hash|
      hash[key] << val
    end
  end
end

# autoprefixer-rails uses ExecJS. Bun is not a supported runtime; a host bun
# shim would otherwise break `middleman build`.
ENV["EXECJS_RUNTIME"] ||= "Node"

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :directory_indexes
activate :syntax
activate :livereload

set :markdown_engine, :kramdown
set :markdown,
    input: "GFM",
    fenced_code_blocks: true,
    smartypants: true,
    hard_wrap: false

set :relative_links, true
activate :relative_assets

page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false
page "/404.html", directory_index: false
page "/docs/*", layout: "docs"
page "/learn/*", layout: "learn"
page "/learn/index.html", layout: "learn"
page "/learn/*/bad.html", layout: "example"
page "/learn/*/good.html", layout: "example"
page "/learn/*/pick.html", layout: "practice"
page "/learn/*/fix.html", layout: "practice"

configure :build do
  activate :minify_css
  # Hash CSS/images only. ESM import specifiers in site.js.erb are literal
  # filenames and cannot be rewritten by asset_hash.
  activate :asset_hash, ignore: [%r{javascripts/}]
end

# GitHub Pages may still treat the artifact as Jekyll unless this file exists.
after_build do |builder|
  File.write(File.join(config[:build_dir], ".nojekyll"), "")
end
