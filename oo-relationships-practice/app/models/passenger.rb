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

        # look at all the rides
        # look at specific passenger's rides
        # get the drivers of those rides
        self.rides.map {|ride| ride.driver}

    end
end