class Sale < ApplicationRecord
    belongs_to :restaurant
    belongs_to :user
    has_many :food_items
end
