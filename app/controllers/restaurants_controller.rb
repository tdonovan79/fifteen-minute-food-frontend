class RestaurantsController < ApplicationController
before_action :authorized, only: [:persist]
    
    def create
        @restaurant = Restaurant.create(restaurant_params)
    end

    private

    def restaurant_params
        params.permit(:name, :location, :category, :phone_number, :address, :image_url)
    end

end
