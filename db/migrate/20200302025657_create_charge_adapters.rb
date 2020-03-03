class CreateChargeAdapters < ActiveRecord::Migration[6.0]
  def change
    create_table :charge_adapters do |t|

      t.timestamps
    end
  end
end
