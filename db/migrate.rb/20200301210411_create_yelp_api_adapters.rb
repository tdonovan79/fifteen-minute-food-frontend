class CreateYelpApiAdapters < ActiveRecord::Migration[6.0]
  def change
    create_table :yelp_api_adapters do |t|

      t.timestamps
    end
  end
end
