class QuoteSerializer < ActiveModel::Serializer
  attributes :id,:text, :author, :created_at
  has_one :user
end
