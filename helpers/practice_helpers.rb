module PracticeHelpers
  def heading_order_pick_pool
    pool = data.heading_order_pick
    {
      "bad" => Array(pool&.bad).map { |item| item.to_s.strip },
      "good" => Array(pool&.good).map { |item| item.to_s.strip }
    }
  end
end
