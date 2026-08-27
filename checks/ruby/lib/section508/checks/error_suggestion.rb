# frozen_string_literal: true

module Section508
  module Checks
    # When the format is known, the text says how to fix it.
    class ErrorSuggestion
      WEAK = /^(invalid\.?|invalid date\.?|error\.?|required\.?|not valid\.?)$/i
      HINT = /like |use |example|yyyy|year-month|@ |format|must include|try |include an? /i

      def self.call(root)
        return [] unless root

        text = Dom.norm(root)
        return ["There is no suggestion in text."] if text.empty?
        return ["The message does not suggest how to fix the error."] if WEAK.match?(text) || !HINT.match?(text)

        []
      end
    end
  end
end
