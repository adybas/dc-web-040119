

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

    def likes
        Like.all.select do |like|
            # get all the pairings that match the user
            like.user == self
        end

    end

    def liked_tweets
        # look through all the user-tweet pairings (Likes)
        # return the tweets corresponding with those likes
        self.likes.map do |like|
            like.tweet
        end
    end

    def liked_messages
        # return a list of messages
        self.liked_tweets.map {|tweet| tweet.message}
    end

    def unlike_tweet(tweet)
        # get all likes
        # select the like with the tweet we are looking for
        # delete the value from Like.all
        bad_like = self.likes.find {|like| like.tweet == tweet}
        Like.all.delete(bad_like)
    end

end

