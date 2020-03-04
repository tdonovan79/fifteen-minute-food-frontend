class FoodItemsController < ApplicationController
    before_action :authotized, only: [:persist]

    def create
        @food_item = FoodItem.create(food_params)
        if @food_item.valid?
            wristband = encode_token({food_item_id: @food_item.id})
            render json: { food_item: FoodItemSerializer.new(@food_item), token: wristband }, status: 201
        else
            render json: {error: "Nope"}
        end

    end

    def persist
        wristband = encode_token({food_item_id: @food_item.id})
        render json: { food_item: FoodItemSerializer.new(@food_item), token: wristband }
    end

    private

    def food_params
        params.permit(:name, :image_url, :price, :sale_id)
    end
end
