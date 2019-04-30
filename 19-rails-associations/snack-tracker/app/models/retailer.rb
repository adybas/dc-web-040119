class Retailer < ApplicationRecord

    has_many :snacks
    accepts_nested_attributes_for :snacks
    
    def upcase_name
        return self.name.upcase
    end
end
