class Listing

    attr_reader :city

    @@all = []

    def initialize(city)
        @city = city
        @@all << self
    end

    def self.all 
        @@all
    end


end