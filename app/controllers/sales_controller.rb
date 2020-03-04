class SalesController < ApplicationController
    # before_action 
    # :authorized, only: [:persist]

    def index
        sale = Sale.all 

        render json: sale
    end

    def create
        # byebug
        if User.all.find_by(username: sale_params[:user])
            @user = User.all.find_by(username: sale_params[:user])
            if  Restaurant.all.find_by(address: sale_params[:restaurant][:address])
                @restaurant = Restaurant.all.find_by(address: sale_params[:restaurant][:address])
                @sale = Sale.create(user: @user, restaurant: @restaurant)

                params[:items].each do |item| 
                    FoodItem.create(name: item[:name], price: item[:price], sale: @sale)
                end
                
            else 
                @restaurant = Restaurant.create(sale_params[:restaurant])
                @sale = Sale.create(user: @user, restaurant: @restaurant)

                params[:items].each do |item| 
                    FoodItem.create(name: item[:name], price: item[:price], sale: @sale)
                end
            end
            render json: @sale
        else
            render json: { error: "NOPE" }
        end
    end
        

    

        

    # def persist
    #     wristband = encode_token({sale_id: @sale.id})
    #     render json: { sale: SaleSerializer.new(@sale), token: wristband }
    # end

    private

    # def restaurant_params
    #     params.permit(:name, :location, :category, :phone_number, :address, :image_url)
    # end

    def sale_params
        params.permit(:user, restaurant:[:name, :location, :category, :phone_number, :address, :image_url], items: [])
    end


end
