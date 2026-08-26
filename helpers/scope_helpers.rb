# Success-criterion ids and requirement-profile slugs for a rule.
# Source of truth is the rule page frontmatter (`sc`, `profiles`). Isolated
# examples and practice inherit from `of:` unless they set their own.
module ScopeHelpers
  SC_CATALOG = {
    "1.1.1" => {
      "name" => "Non-text Content",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content"
    },
    "1.3.5" => {
      "name" => "Identify Input Purpose",
      "level" => "AA",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose"
    },
    "1.3.1" => {
      "name" => "Info and Relationships",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
    },
    "1.4.5" => {
      "name" => "Images of Text",
      "level" => "AA",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text"
    },
    "1.3.2" => {
      "name" => "Meaningful Sequence",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence"
    },
    "1.4.1" => {
      "name" => "Use of Color",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color"
    },
    "2.5.2" => {
      "name" => "Pointer Cancellation",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation"
    },
    "2.4.1" => {
      "name" => "Bypass Blocks",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks"
    },
    "2.4.3" => {
      "name" => "Focus Order",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/focus-order"
    },
    "1.4.2" => {
      "name" => "Audio Control",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/audio-control"
    },
    "3.2.1" => {
      "name" => "On Focus",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/on-focus"
    },
    "3.2.2" => {
      "name" => "On Input",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/on-input"
    },
    "3.2.4" => {
      "name" => "Consistent Identification",
      "level" => "AA",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification"
    },
    "4.1.3" => {
      "name" => "Status Messages",
      "level" => "AA",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/status-messages"
    },
    "2.5.3" => {
      "name" => "Label in Name",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/label-in-name"
    },
    "2.4.4" => {
      "name" => "Link Purpose (In Context)",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context"
    },
    "2.1.1" => {
      "name" => "Keyboard",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/keyboard"
    },
    "3.1.2" => {
      "name" => "Language of Parts",
      "level" => "AA",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts"
    },
    "3.3.1" => {
      "name" => "Error Identification",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/error-identification"
    },
    "3.3.2" => {
      "name" => "Labels or Instructions",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions"
    },
    "3.3.3" => {
      "name" => "Error Suggestion",
      "level" => "AA",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion"
    },
    "4.1.2" => {
      "name" => "Name, Role, Value",
      "level" => "A",
      "understanding" => "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
    }
  }.freeze

  PROFILE_PATH = "/docs/profiles/requirement-profiles/"
  CATALOG_PATH = "/docs/wcag/success-criteria/"

  def rule_scope
    sc_ids, profile_ids = scope_ids_for(current_page)
    return if sc_ids.empty? && profile_ids.empty?

    {
      sc: sc_ids.map { |id| criterion_chip(id) },
      profiles: profile_ids,
      polarity: scope_polarity
    }
  end

  def scope_lead(scope)
    case scope[:polarity]
    when :meets then "Meant to meet"
    when :fails then "Meant to fail"
    else "In"
    end
  end

  def criterion_href(_id)
    url_for(CATALOG_PATH)
  end

  def profile_href(id)
    "#{url_for(PROFILE_PATH)}##{id}"
  end

  private

  def scope_ids_for(page)
    sc = normalize_ids(page.data.sc)
    profiles = normalize_ids(page.data.profiles)
    return [sc, profiles] unless sc.empty? && profiles.empty?

    of = page.data.of.to_s
    return [[], []] if of.empty?

    parent = sitemap.resources.find { |resource| resource.data.node.to_s == of && resource.data.of.to_s.empty? }
    return [[], []] unless parent

    [normalize_ids(parent.data.sc), normalize_ids(parent.data.profiles)]
  end

  def normalize_ids(value)
    Array(value).map { |id| id.to_s.strip }.reject(&:empty?)
  end

  def criterion_chip(id)
    meta = SC_CATALOG[id] || {}
    {
      "id" => id,
      "name" => meta["name"].to_s,
      "level" => meta["level"].to_s,
      "understanding" => meta["understanding"].to_s
    }
  end

  def scope_polarity
    return :fails if specimen_variant == "bad"
    return :meets if specimen_variant == "good"

    :in
  end
end
