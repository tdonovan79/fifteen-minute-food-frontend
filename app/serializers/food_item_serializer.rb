class FoodItemSerializer < ActiveModel::Serializer
  attributes :name, :price

  belongs_to :sale 
  belongs_to :user 
end
