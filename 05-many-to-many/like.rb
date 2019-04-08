class Like

    attr_reader :tweet, :user

    @@all = []

    def initialize(tweet, user)
        @tweet, @user = tweet, user
        @@all << self
    end

    def self.all
        @@all 
    end

end