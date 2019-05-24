class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.string :gender
      t.string :quote
      t.string :image_url
      t.timestamps
    end
  end
end
