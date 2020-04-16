# Fifteen Minute Food

Fifteen Minute Food is a food delivery app that allows users to search for restaurants in the New York City area and place orders for food.

[Back End Github](https://github.com/tdonovan79/fifteen_min_backend)<br/>
[Live App](https://tdonovan79.github.io/fifteen-minute-food-frontend/)<br/>
[Video Demo](https://www.youtube.com/watch?v=VLtyhTnysqU&feature=youtu.be)

## Features
  1. Login and user authentication - New users can be registered on the registration page, as well as users being logged in through the login page. The log in is authorized through theuse of tokens, and the userwill stay logged in (even ifthe page is closed and reopened) until a another user's credentials are entered.
  2. Searching for restaurants - On the Search page, users can typein search terms and list of restaurants will come back from the Yelp API. After selecting a restaurant users can select items to place in their cart to order from the restaurant. Only one restaurant can be ordered from at a time.
  3. Payment - On the Cart page, users can place their order and pay for the food using Stripe API. These orders will then appear on the user profile page under "Past Orders".

## Dev Tools
- Front End:
  - `React` - main frameworks building out the front end of the app
  - `Stripe API` - used to handle payment
  - `Yelp API` - used to handle searches for restaurants
  - `Github Pages` - used to deploy front end of app

- Back End:
  - `Ruby on Rails` - main framework used building out back end of app
  - `PostgreSQL` - database management system 
  - `Heroku` - used to deploy back end of app
