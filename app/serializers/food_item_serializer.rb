class FoodItemSerializer < ActiveModel::Serializer
  attributes :name, :price

  belongs_to :user 
end
