require 'stripe'
require 'dotenv'
Dotenv.load
class ChargeAdapterController < ApplicationController
    def create

        Stripe.api_key = ENV['STRIPE_KEY']
        token = params[:charge][:token]
        price = params[:price]
        # byebug
        charge = Stripe::Charge.create({
            amount: price,
            currency: 'usd',
            source: token,
            description: 'Test Charge!',
        })

        render json: charge

    end
end
