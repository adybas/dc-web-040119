class Retailer < ApplicationRecord

    has_many :snacks

    def upcase_name
        return self.name.upcase
    end
end
