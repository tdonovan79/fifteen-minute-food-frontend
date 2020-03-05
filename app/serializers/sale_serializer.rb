class SaleSerializer < ActiveModel::Serializer
  attributes :restaurant_id, :user_id, :id, :nice_timestamp_for_grandma

  belongs_to :restaurant 
  has_many :food_items
end
