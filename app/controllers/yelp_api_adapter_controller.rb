class YelpApiAdapterController < ApplicationController
    #render json of serach results depending on term and location params. if no location data, 
    #will search new york city
    def search
        term = yelp_params(:term)["term"]
        location = yelp_params(:location)["location"]
        if location == nil
            render :json => YelpApiAdapter.search(term)
        else 
            render :json => YelpApiAdapter.search(term, location)
        end
    end
    
    #render json of reviews of a restaurant
    def reviews
        business_id = yelp_params(:business_id)["business_id"]
        render :json => YelpApiAdapter.business_reviews(business_id)
    end
    #render json of business info of a restaurant
    def info
        business_id = yelp_params(:business_id)["business_id"]
        render :json => YelpApiAdapter.business_info(business_id)
    end

    private
    def yelp_params(*args)
        params.permit(:term, :location, :business_id)
    end
end
