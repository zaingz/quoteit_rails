class QuoteSerializer < ActiveModel::Serializer
  attributes :id,:text, :author, :created_at, :user

end
