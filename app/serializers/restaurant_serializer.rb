class RestaurantSerializer < ActiveModel::Serializer
  attributes :name, :location

  has_many :users
  has_many :sales
end
