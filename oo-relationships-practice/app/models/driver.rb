class Driver

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
            ride.driver == self
        end
    end

    def passengers
        # returns an array of all the drivers' passengers
        self.rides.collect {|ride| ride.passenger}
    end

    def total_distance
        # returns total distance of this driver
        total = 0
        self.rides.each do |ride|
            total += ride.distance 
        end
        return total

    end

    def self.mileage_cap(distance)
        # returns all drivers who have exceeded distance
        long_distance_drivers = []
        Driver.all.each do |driver|
            if driver.total_distance > distance 
                long_distance_drivers << driver
            end
        end
        return long_distance_drivers



    end

end
