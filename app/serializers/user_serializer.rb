class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_one :identity
end
