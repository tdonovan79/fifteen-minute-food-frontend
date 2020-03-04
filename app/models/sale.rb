class Sale < ApplicationRecord
    belongs_to :restaurant
    belongs_to :user
    has_many :food_items

    # def create_sale
    #     Sale.create(sales_params)
    # end

    # private

    def sale_params
        params.permit(:restaurant_id, :user_id)
    end
    
end
