# frozen_string_literal: true

RSpec.describe "check API" do
  it "accepts an HTML string" do
    result = Section508.check("<h1>Menu</h1><h4>Soup</h4>", rules: ["heading-order"])
    expect(result.ok?).to eq(false)
    expect(result.failures[0].id).to eq("heading-order")
    expect(result.failures[0].title).to be_a(String)
    expect(result.failures[0].title).not_to be_empty
    expect(result.failures[0].details).not_to be_empty
  end

  it "accepts a Nokogiri node" do
    root = Section508::Document.from("<h1>Menu</h1><h2>Soup</h2>")
    result = Section508.check(root, rules: ["heading-order"])
    expect(result.ok?).to eq(true)
    expect(result.failures).to eq([])
  end

  it "accepts a duck-typed page with html" do
    page = Object.new
    def page.html
      "<h1>Menu</h1><h2>Soup</h2>"
    end

    result = Section508.check(page, rules: ["heading-order"])
    expect(result.ok?).to eq(true)
  end

  it "accepts a duck-typed response with body" do
    response = Struct.new(:body).new("<h1>Menu</h1><h4>Soup</h4>")
    result = Section508.check(response, rules: ["heading-order"])
    expect(result.ok?).to eq(false)
  end

  it "accepts a duck-typed node with native" do
    native = Section508::Document.from("<h1>Menu</h1><h2>Soup</h2>")
    node = Struct.new(:native).new(native)
    result = Section508.check(node, rules: ["heading-order"])
    expect(result.ok?).to eq(true)
  end

  it "filters 2.1-only rules out of section-508-web" do
    html = '<button aria-label="Save file">Delete</button>'
    all = Section508.check(html, rules: ["label-in-name"])
    filtered = Section508.check(html, rules: ["label-in-name"], profile: "section-508-web")
    expect(all.ok?).to eq(false)
    expect(filtered.ok?).to eq(true)
  end

  it "intersects rules with a profile" do
    html = "<h1>Menu</h1><h4>Soup</h4>"
    result = Section508.check(html, rules: ["heading-order"], profile: "section-508-web")
    expect(result.ok?).to eq(false)
  end

  it "has an RSpec matcher" do
    expect("<h1>Menu</h1><h2>Soup</h2>").to meet_section508("heading-order")
    expect("<h1>Menu</h1><h2>Soup</h2>").to meet_section508(rules: ["heading-order"])
    expect("<h1>Menu</h1><h4>Soup</h4>").not_to meet_section508("heading-order")
  end

  it "has a Minitest assertion" do
    helper = Object.new.extend(Section508::Minitest)
    def helper.assert(condition, message = nil)
      raise message || "assert failed" unless condition
    end

    expect { helper.assert_section508("<h1>Menu</h1><h2>Soup</h2>", rules: ["heading-order"]) }.not_to raise_error
    expect { helper.assert_section508("<h1>Menu</h1><h4>Soup</h4>", rules: ["heading-order"]) }.to raise_error(/heading-order/)
  end
end
