class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def say_hi
        "Hi my name is #{self.username}"
    end

    def tweets
        # returns all the user's tweets

        Tweet.all.select do |tweet|
            tweet.user == self    
        end
    end


    def post_tweet(message)
        # User#post_tweet` that takes a message, 
        # creates a new tweet, 
        # and adds it to the user's tweet collection
        Tweet.new(message, self)
    end
end

