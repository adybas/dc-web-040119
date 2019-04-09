class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message, @user = message, user
        @@all << self
    end

    def username
        self.user.username
    end

    def self.all
        @@all
    end

    def likers
        # returns a collection of all the Users who have liked this tweet
        tweet_likes = Like.all.select do |like| 
            like.tweet == self
        end
        tweet_likes.collect {|like| like.user}

    end
end