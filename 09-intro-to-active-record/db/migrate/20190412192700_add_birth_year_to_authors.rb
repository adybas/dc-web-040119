class AddBirthYearToAuthors < ActiveRecord::Migration[5.2]
  def change

    add_column :authors, :birth_year, :integer

  end
end
