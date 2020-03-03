class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :location
      t.string :category
      t.string :phone_number
      t.string :address
      t.string :image_url
      t.timestamps
    end
  end
end
