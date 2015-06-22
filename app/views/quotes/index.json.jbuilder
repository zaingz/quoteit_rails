json.array!(@quotes) do |quote|
  json.extract! quote, :id, :text, :author, :user_id
  json.url quote_url(quote, format: :json)
end
