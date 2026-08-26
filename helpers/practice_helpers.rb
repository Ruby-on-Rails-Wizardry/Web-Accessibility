module PracticeHelpers
  def practice_pick_pool
    key = "#{current_page.data.of.to_s.tr('-', '_')}_pick"
    pool = data.respond_to?(key) ? data.public_send(key) : nil
    {
      "bad" => normalize_pool_items(pool&.bad),
      "good" => normalize_pool_items(pool&.good)
    }
  end

  def normalize_pool_items(list)
    Array(list).map { |item| item.to_s.strip }.reject(&:empty?)
  end
end
