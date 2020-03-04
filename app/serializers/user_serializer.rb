class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :restaurants
  has_many :sales
  has_many :food_items
end
