class IdentitySerializer < ActiveModel::Serializer
  attributes :uid, :provider
end
