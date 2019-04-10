class Passenger

    attr_reader :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all 
        @@all 
    end

    def rides
        Ride.all.select do |ride|
            ride.passenger == self
        end
    end

    def drivers

    end
end