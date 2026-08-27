from section508.checks.accessible_name import check as accessible_name
from section508.checks.audio_control import check as audio_control
from section508.checks.color_not_only_cue import check as color_not_only_cue
from section508.checks.consistent_identification import check as consistent_identification
from section508.checks.data_tables import check as data_tables
from section508.checks.decorative_image_silent import check as decorative_image_silent
from section508.checks.error_identification import check as error_identification
from section508.checks.error_suggestion import check as error_suggestion
from section508.checks.focus_order import check as focus_order
from section508.checks.functional_image_names_action import check as functional_image_names_action
from section508.checks.heading_elements import check as heading_elements
from section508.checks.heading_order import check as heading_order
from section508.checks.images_of_text import check as images_of_text
from section508.checks.informative_image_alt import check as informative_image_alt
from section508.checks.input_purpose import check as input_purpose
from section508.checks.keyboard_operable import check as keyboard_operable
from section508.checks.label_in_name import check as label_in_name
from section508.checks.language_of_parts import check as language_of_parts
from section508.checks.link_purpose import check as link_purpose
from section508.checks.lists import check as lists
from section508.checks.meaningful_sequence import check as meaningful_sequence
from section508.checks.name_role_value import check as name_role_value
from section508.checks.native_control import check as native_control
from section508.checks.no_change_on_focus import check as no_change_on_focus
from section508.checks.no_change_on_input import check as no_change_on_input
from section508.checks.placeholder_not_label import check as placeholder_not_label
from section508.checks.pointer_cancellation import check as pointer_cancellation
from section508.checks.skip_link import check as skip_link
from section508.checks.status_messages import check as status_messages
from section508.checks.visible_label import check as visible_label

CHECKS = {
    "heading-order": heading_order,
    "heading-elements": heading_elements,
    "lists": lists,
    "data-tables": data_tables,
    "native-control": native_control,
    "visible-label": visible_label,
    "placeholder-not-label": placeholder_not_label,
    "informative-image-alt": informative_image_alt,
    "decorative-image-silent": decorative_image_silent,
    "functional-image-names-action": functional_image_names_action,
    "link-purpose": link_purpose,
    "label-in-name": label_in_name,
    "input-purpose": input_purpose,
    "language-of-parts": language_of_parts,
    "error-identification": error_identification,
    "error-suggestion": error_suggestion,
    "accessible-name": accessible_name,
    "name-role-value": name_role_value,
    "images-of-text": images_of_text,
    "skip-link": skip_link,
    "color-not-only-cue": color_not_only_cue,
    "keyboard-operable": keyboard_operable,
    "focus-order": focus_order,
    "no-change-on-focus": no_change_on_focus,
    "no-change-on-input": no_change_on_input,
    "audio-control": audio_control,
    "status-messages": status_messages,
    "consistent-identification": consistent_identification,
    "meaningful-sequence": meaningful_sequence,
    "pointer-cancellation": pointer_cancellation,
}
