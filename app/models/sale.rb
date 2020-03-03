class Sale < ApplicationRecord
    belongs_to :restaurant
    belongs_to :user
end
