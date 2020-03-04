class Sale < ApplicationRecord
    belongs_to :restaurant
    belongs_to :user
<<<<<<< HEAD
    has_many :food_items

    def create_sale
        Sale.create(sales_params)
    end

    private

    def sale_params
        params.permit(:restaurant_id, :user_id)
    end
=======
    
    has_many :food_items
>>>>>>> fif_backend_5
end
