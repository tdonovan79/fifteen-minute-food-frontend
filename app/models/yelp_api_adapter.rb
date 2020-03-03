class YelpApiAdapter < ApplicationRecord
    require "json"
    require "http"

    API_HOST = "https://api.yelp.com"
    SEARCH_PATH = "/v3/businesses/search"
    BUSINESS_PATH = "/v3/businesses/"  # trailing / because we append the business id to the path
    API_KEY = ENV["YELP_KEY"]
    SEARCH_LIMIT = 5
    #search for resturaunts. first argument serach term second is location
    def self.search(term, location="new york")
        url = "#{API_HOST}#{SEARCH_PATH}"
        params = {
            term: term,
            location: location,
            limit: SEARCH_LIMIT
        }
        response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
        response.parse["businesses"]
    end
    #get a business's reviews
    def self.business_reviews(business_id)
        url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}/reviews"
        response = HTTP.auth("Bearer #{API_KEY}").get(url)
        response.parse["reviews"]
    end
    #get info on a business
    def self.business_info(business_id)
        url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}"
        response = HTTP.auth("Bearer #{API_KEY}").get(url)
        response.parse
    end
end
