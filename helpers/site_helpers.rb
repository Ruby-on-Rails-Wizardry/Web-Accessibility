module SiteHelpers
  def site
    data.site
  end

  # Directory-index URLs like `/learn/` do not match sitemap paths
  # (`learn/index.html`), so Middleman would leave them root-absolute.
  # Resolve them to resources so `relative_links` works on GitHub Pages.
  def url_for(path_or_resource, options={})
    resource, extras = resolve_sitemap_resource(path_or_resource)
    super(resource, extras.merge(options))
  end

  def resolve_sitemap_resource(path_or_resource)
    extras = {}
    return [path_or_resource, extras] unless path_or_resource.is_a?(String)

    href = path_or_resource
    return [path_or_resource, extras] if href.empty? || href.start_with?("#", "mailto:", "tel:", "http://", "https://", "//")

    path, fragment = href.split("#", 2)
    path, query = path.split("?", 2)
    extras[:query] = query if query
    extras[:fragment] = fragment if fragment
    return [path_or_resource, extras] if path.nil? || path.empty?

    resource =
      sitemap.find_resource_by_path(path) ||
      sitemap.find_resource_by_destination_path(path.sub(%r{\A/}, "")) ||
      sitemap.find_resource_by_destination_path(path)

    if resource.nil? && path.end_with?("/")
      index = File.join(path.sub(%r{/\z}, ""), "index.html").sub(%r{\A/}, "")
      resource =
        sitemap.find_resource_by_destination_path(index) ||
        sitemap.find_resource_by_path("/#{index}") ||
        sitemap.find_resource_by_path(index)
    end

    [resource || path_or_resource, extras]
  end


  def page_title
    parts = [current_page.data.title, site.title].compact
    parts.uniq.join(" · ")
  end

  def page_description
    current_page.data.description || site.description || site.tagline
  end

  def nav_items
    Array(site.nav)
  end

  def nav_current?(path)
    href = path.to_s
    return current_page.url == "/" if href == "/"

    current_page.url.start_with?(href)
  end

  def accent_color
    color = site.accent.to_s.strip
    color.empty? ? "#b91c1c" : color
  end

  def org_name
    name = site.org.to_s.strip
    name.empty? ? "Ruby on Rails Wizardry" : name
  end

  # Wordmark goes to the org GitHub Pages home. Satellite sites set
  # `pages_url` so this is not rewritten as a relative in-site link.
  def org_home
    url = site.pages_url.to_s.strip
    return url_for("/") if url.empty? || url == "/"

    url
  end

  # Directory trail under /docs/, for the sidebar breadcrumb.
  def docs_crumbs
    url = current_page.url.to_s
    url = "/#{url}" unless url.start_with?("/")
    url = url.sub(%r{/index\.html\z}, "/")
    url = url.sub(%r{\.html\z}, "/")
    url += "/" unless url.end_with?("/")

    return [] unless url == "/docs/" || url.start_with?("/docs/")

    prefixes = ["/docs/"]
    acc = "/docs"
    url.sub(%r{\A/docs/?}, "").split("/").reject(&:empty?).each do |segment|
      acc = "#{acc}/#{segment}"
      prefixes << "#{acc}/"
    end

    prefixes.map do |prefix|
      resource, = resolve_sitemap_resource(prefix)
      title = resource.data.title.to_s.strip if resource.respond_to?(:data)
      title = File.basename(prefix.chomp("/")).tr("-", " ") if title.nil? || title.empty?
      title = "Library" if prefix == "/docs/"
      {
        title: title,
        path: prefix,
        current: prefix == url
      }
    end
  end
end
