Rails.application.routes.draw do
  # register a user
  resources :users, only: [:create, :index]
  # login custom route
  post "/login", to: "users#login"

  # route to persist a user
  get "/persist", to: "users#persist"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'yelp_api_adapter/search', :to => 'yelp_api_adapter#search'
  get 'yelp_api_adapter/reviews', :to => 'yelp_api_adapter#reviews'
  get 'yelp_api_adapter/info', :to => 'yelp_api_adapter#info'
  post '/charge_adapter', to: 'charge_adapter#create'
end
