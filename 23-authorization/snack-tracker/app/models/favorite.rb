class Favorite < ApplicationRecord
    belongs_to :snack
    belongs_to :user
end
