class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def self.all 
        @@all 
    end

    def username
        # returns the username
        self.user.username
    end

end