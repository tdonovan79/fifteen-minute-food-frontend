# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
kevin = User.create(username: "Kevin", password: "cheetos")

restaurant = Restaurant.create(name: "Big Gay Ice Cream", location: "BK")

food = FoodItem.create(name: "Beef", price: "25")

sale1 = Sale.create(user_id: kevin.id, restaurant_id: restaurant.id)
