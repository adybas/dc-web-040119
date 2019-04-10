class Trip

    attr_reader :guest, :listing

    @@all = []

    def initialize(listing, guest)
        @listing, @guest = listing, guest
        @@all << self
    end

    def self.all 
        @@all 
    end
end