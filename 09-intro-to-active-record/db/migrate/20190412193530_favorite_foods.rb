class FavoriteFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_foods do |t|
        t.string :name
        t.integer :calories
    end
  end
end
