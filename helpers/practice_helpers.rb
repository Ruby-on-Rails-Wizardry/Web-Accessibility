module PracticeHelpers
  def practice_pick_pool
    key = "#{current_page.data.of.to_s.tr('-', '_')}_pick"
    pool = data.respond_to?(key) ? data.public_send(key) : nil
    {
      "bad" => Array(pool&.bad).map { |item| item.to_s.strip },
      "good" => Array(pool&.good).map { |item| item.to_s.strip }
    }
  end
end
