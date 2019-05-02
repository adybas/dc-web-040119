class State < ApplicationRecord
    has_many :cities
    accepts_nested_attributes_for :cities

    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :abbreviation, 
        presence: true,
        length: {is: 2},
        uniqueness: {case_sensitive: false}
    validates :bird, presence: true
    validates :year_founded, presence: true
end
