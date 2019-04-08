

class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(text)
        Tweet.new(text, self)
    end

    def like_tweet(tweet)
        Like.new(tweet, self)
    end

    def liked_tweets
        # look through all the user-tweet pairings (Likes)
        likes = Like.all.select do |like|
            # get all the pairings that match the user
            like.user == self
        end
        # return the tweets corresponding with those likes
        likes.map do |like|
            like.tweet
        end
    end

end

