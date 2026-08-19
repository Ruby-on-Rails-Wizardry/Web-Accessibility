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
end
