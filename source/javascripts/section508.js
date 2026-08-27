// In-browser library: run in-house cops on a DOM node.
// Node tests and Playwright string checks go through checks/javascript/.

import { headingOrderCheck } from "./heading_order_check.js"
import { headingElementsCheck } from "./heading_elements_check.js"
import { listsCheck } from "./lists_check.js"
import { dataTablesCheck } from "./data_tables_check.js"
import { nativeControlCheck } from "./native_control_check.js"
import { visibleLabelCheck } from "./visible_label_check.js"
import { placeholderNotLabelCheck } from "./placeholder_not_label_check.js"
import { informativeImageAltCheck } from "./informative_image_alt_check.js"
import { decorativeImageSilentCheck } from "./decorative_image_silent_check.js"
import { functionalImageNamesActionCheck } from "./functional_image_names_action_check.js"
import { linkPurposeCheck } from "./link_purpose_check.js"
import { labelInNameCheck } from "./label_in_name_check.js"
import { inputPurposeCheck } from "./input_purpose_check.js"
import { languageOfPartsCheck } from "./language_of_parts_check.js"
import { errorIdentificationCheck } from "./error_identification_check.js"
import { errorSuggestionCheck } from "./error_suggestion_check.js"
import { accessibleNameCheck } from "./accessible_name_check.js"
import { nameRoleValueCheck } from "./name_role_value_check.js"
import { imagesOfTextCheck } from "./images_of_text_check.js"
import { skipLinkCheck } from "./skip_link_check.js"
import { colorNotOnlyCueCheck } from "./color_not_only_cue_check.js"
import { keyboardOperableCheck } from "./keyboard_operable_check.js"
import { focusOrderCheck } from "./focus_order_check.js"
import { noChangeOnFocusCheck } from "./no_change_on_focus_check.js"
import { noChangeOnInputCheck } from "./no_change_on_input_check.js"
import { audioControlCheck } from "./audio_control_check.js"
import { statusMessagesCheck } from "./status_messages_check.js"
import { consistentIdentificationCheck } from "./consistent_identification_check.js"
import { meaningfulSequenceCheck } from "./meaningful_sequence_check.js"
import { pointerCancellationCheck } from "./pointer_cancellation_check.js"

export const CHECKS = {
  "heading-order": headingOrderCheck,
  "heading-elements": headingElementsCheck,
  lists: listsCheck,
  "data-tables": dataTablesCheck,
  "native-control": nativeControlCheck,
  "visible-label": visibleLabelCheck,
  "placeholder-not-label": placeholderNotLabelCheck,
  "informative-image-alt": informativeImageAltCheck,
  "decorative-image-silent": decorativeImageSilentCheck,
  "functional-image-names-action": functionalImageNamesActionCheck,
  "link-purpose": linkPurposeCheck,
  "label-in-name": labelInNameCheck,
  "input-purpose": inputPurposeCheck,
  "language-of-parts": languageOfPartsCheck,
  "error-identification": errorIdentificationCheck,
  "error-suggestion": errorSuggestionCheck,
  "accessible-name": accessibleNameCheck,
  "name-role-value": nameRoleValueCheck,
  "images-of-text": imagesOfTextCheck,
  "skip-link": skipLinkCheck,
  "color-not-only-cue": colorNotOnlyCueCheck,
  "keyboard-operable": keyboardOperableCheck,
  "focus-order": focusOrderCheck,
  "no-change-on-focus": noChangeOnFocusCheck,
  "no-change-on-input": noChangeOnInputCheck,
  "audio-control": audioControlCheck,
  "status-messages": statusMessagesCheck,
  "consistent-identification": consistentIdentificationCheck,
  "meaningful-sequence": meaningfulSequenceCheck,
  "pointer-cancellation": pointerCancellationCheck
}

export function check(root, options = {}) {
  const ids = Array.isArray(options.rules) ? options.rules : Object.keys(CHECKS)
  const failures = []

  ids.forEach((id) => {
    const checker = CHECKS[id]
    if (typeof checker !== "function") return
    const details = checker(root) || []
    if (details.length) failures.push({ id, details })
  })

  return { ok: failures.length === 0, failures }
}
