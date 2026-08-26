// Input-purpose cop: personal fields need an autocomplete token.
// type=email is not enough. autocomplete=off on those fields fails.

const PERSONAL_TYPES = { email: "email", tel: "tel" }
const PERSONAL_NAME = /^(email|name|given-name|family-name|tel|phone|address|street-address)$/i
const TOKENS = /^(name|honorific-prefix|given-name|additional-name|family-name|honorific-suffix|nickname|username|new-password|current-password|organization-title|organization|street-address|address-line1|address-line2|address-line3|address-level4|address-level3|address-level2|address-level1|country|country-name|postal-code|cc-name|cc-given-name|cc-additional-name|cc-family-name|cc-number|cc-exp|cc-exp-month|cc-exp-year|cc-csc|cc-type|transaction-currency|transaction-amount|language|bday|bday-day|bday-month|bday-year|sex|url|photo|tel|tel-country-code|tel-national|tel-area-code|tel-local|tel-local-prefix|tel-local-suffix|tel-extension|impp|email)$/i

export function inputPurposeCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const fields = [...root.querySelectorAll("input, textarea, select")].filter(isPersonal)
  if (!fields.length) return ["This section has no personal name, email, or address field."]

  for (const field of fields) {
    const token = (field.getAttribute("autocomplete") || "").trim().split(/\s+/).pop()
    if (!token || token.toLowerCase() === "off" || token.toLowerCase() === "on") {
      return [`“${hint(field)}” needs an autocomplete token.`]
    }
    if (!TOKENS.test(token)) {
      return [`“${token}” is not a recognized input-purpose token.`]
    }
  }
  return []
}

function isPersonal(field) {
  const type = (field.getAttribute("type") || "text").toLowerCase()
  if (PERSONAL_TYPES[type]) return true
  const key = `${field.getAttribute("name") || ""} ${field.getAttribute("id") || ""} ${field.getAttribute("autocomplete") || ""}`
  return PERSONAL_NAME.test(field.getAttribute("name") || "") || PERSONAL_NAME.test(field.getAttribute("id") || "") || /email|name|tel|phone|address/i.test(key)
}

function hint(field) {
  return (field.getAttribute("id") || field.getAttribute("name") || field.getAttribute("type") || "this field").trim()
}
