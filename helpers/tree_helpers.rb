module TreeHelpers
  def tree_nodes
    Array(data.tree.nodes)
  end

  def tree_by_id
    tree_nodes.each_with_object({}) { |node, hash| hash[node.id.to_s] = node }
  end

  def tree_lookup(id)
    tree_by_id[id.to_s]
  end

  def current_tree_node
    id = current_page.data.node
    return if id.nil? || id.to_s.strip.empty?

    tree_lookup(id)
  end

  def tree_link(id)
    node = tree_lookup(id)
    return id.to_s if node.nil?

    link_to node.title, node.path
  end

  def tree_nodes_in_layer(layer)
    tree_nodes.select { |node| node.layer.to_i == layer.to_i }
  end

  def tree_layers
    tree_nodes.map { |node| node.layer.to_i }.uniq.sort
  end

  def tree_nodes_of_kind(kind)
    tree_nodes.select { |node| node.kind.to_s == kind.to_s }
  end

  def tree_example_ids(node)
    Array(node&.children).select { |id| tree_lookup(id)&.kind.to_s == "example" }
  end

  def tree_next_ids(node)
    Array(node&.children).reject { |id| tree_lookup(id)&.kind.to_s == "example" }
  end

  def tree_parent_node(node)
    return if node.nil?

    tree_nodes.find { |candidate| Array(candidate.children).map(&:to_s).include?(node.id.to_s) }
  end

  def tree_previous_id(node)
    return if node.nil?

    spine = Array(node.spine).map(&:to_s)
    index = spine.index(node.id.to_s)
    return spine[index - 1] if index && index.positive?

    Array(node.prereqs).last
  end

  def tree_following_id(node)
    return if node.nil?

    kids = tree_next_ids(node)
    return kids.first if kids.any?

    current = node
    while current
      parent = tree_parent_node(current)
      return if parent.nil?

      siblings = tree_next_ids(parent)
      index = siblings.index { |id| id.to_s == current.id.to_s }
      return siblings[index + 1] if index && siblings[index + 1]

      current = parent
    end
  end

  def specimen_variant
    current_page.data.specimen.to_s
  end

  def specimen_parent_node
    tree_lookup(current_page.data.of)
  end

  def specimen_other_node
    of = current_page.data.of.to_s
    return if of.empty? || specimen_variant.empty?

    other = specimen_variant == "bad" ? "good" : "bad"
    tree_lookup("#{of}-#{other}")
  end
end
