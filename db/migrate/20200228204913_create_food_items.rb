class CreateFoodItems < ActiveRecord::Migration[6.0]
  def change
    create_table :food_items do |t|
      t.string :name
      t.string :image_url
      t.string :price
      t.integer :restaurant_id
      t.timestamps
    end
  end
end
