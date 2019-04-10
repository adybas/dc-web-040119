class Like

    attr_reader :tweet, :user

    @@all = []

    def initialize(tweet, user)
        existing_like = Like.all.find {|like| like.tweet == tweet && like.user == user}
        if existing_like.nil?
            @tweet, @user = tweet, user
            @@all << self
        else
            return "You have already made that like"
        end
    end

    def self.all
        @@all 
    end

end