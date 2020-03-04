class SalesController < ApplicationController
before_action :authorized, only: [:persist]

    def create
        @sale = Sale.create(sale_params)
        if @sale.valid?
            wristband = encode_token({sale_id: @sale.id})
            render json { sale: SaleSerializer.new(@sale), token: wristband }, status: 201
        else
            render json: { error: "Nope!"}
        end
    end

    def persist
        wristband = encode_token({sale_id: @sale.id})
        render json: { sale: SaleSerializer.new(@sale), token: wristband }
    end

    private

    def sale_params
        params.permit(:restaurant_id, :food_id)
    end

end
