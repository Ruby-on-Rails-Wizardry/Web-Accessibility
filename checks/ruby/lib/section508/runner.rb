# frozen_string_literal: true

module Section508
  module Runner
    CHECKS = {
      "heading-order" => Checks::HeadingOrder,
      "heading-elements" => Checks::HeadingElements,
      "lists" => Checks::Lists,
      "data-tables" => Checks::DataTables,
      "native-control" => Checks::NativeControl,
      "visible-label" => Checks::VisibleLabel,
      "placeholder-not-label" => Checks::PlaceholderNotLabel,
      "informative-image-alt" => Checks::InformativeImageAlt,
      "decorative-image-silent" => Checks::DecorativeImageSilent,
      "functional-image-names-action" => Checks::FunctionalImageNamesAction,
      "link-purpose" => Checks::LinkPurpose,
      "label-in-name" => Checks::LabelInName,
      "input-purpose" => Checks::InputPurpose,
      "language-of-parts" => Checks::LanguageOfParts,
      "error-identification" => Checks::ErrorIdentification,
      "error-suggestion" => Checks::ErrorSuggestion,
      "accessible-name" => Checks::AccessibleName,
      "name-role-value" => Checks::NameRoleValue,
      "images-of-text" => Checks::ImagesOfText,
      "skip-link" => Checks::SkipLink,
      "color-not-only-cue" => Checks::ColorNotOnlyCue,
      "keyboard-operable" => Checks::KeyboardOperable,
      "no-keyboard-trap" => Checks::NoKeyboardTrap,
      "focus-order" => Checks::FocusOrder,
      "no-change-on-focus" => Checks::NoChangeOnFocus,
      "no-change-on-input" => Checks::NoChangeOnInput,
      "audio-control" => Checks::AudioControl,
      "status-messages" => Checks::StatusMessages,
      "consistent-identification" => Checks::ConsistentIdentification,
      "meaningful-sequence" => Checks::MeaningfulSequence,
      "pointer-cancellation" => Checks::PointerCancellation
    }.freeze

    module_function

    def run(root, ids)
      failures = []
      ids.each do |id|
        checker = CHECKS[id]
        next unless checker.respond_to?(:call)

        details = Array(checker.call(root))
        next if details.empty?

        meta = Catalog.by_id[id] || {}
        failures << Failure.new(
          id: id,
          title: meta["title"] || id,
          details: details
        )
      end
      Result.new(failures)
    end
  end
end
