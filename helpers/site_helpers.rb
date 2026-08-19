module SiteHelpers
  def site
    data.site
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
end
