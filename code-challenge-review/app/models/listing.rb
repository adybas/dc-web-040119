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

    def self.find_all_by_city(city)
        self.all.select do |listing|
            listing.city == city
        end
    end

    def trips

    end


end