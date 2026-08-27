# frozen_string_literal: true

module Section508
  Failure = Struct.new(:id, :title, :details, keyword_init: true)

  class Result
    attr_reader :failures

    def initialize(failures)
      @failures = Array(failures)
    end

    def ok?
      failures.empty?
    end

    alias ok ok?
  end
end
