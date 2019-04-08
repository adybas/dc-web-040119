require "pry"
require_relative "./tweet.rb"
require_relative "./user.rb"
require_relative "./like.rb"

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

tweet1 = Tweet.new("I love coffee", coffee_dad)
tweet2 = Tweet.new("Making coffee", coffee_dad)
tweet3 = Tweet.new("I need coffee", coffee_dad)
tweet4 = Tweet.new("Life is a meaningless void", coffee_dad)
tweet5 = Tweet.new("I need tea", tea_uncle)
tweet6 = Tweet.new("I like tea", tea_uncle)
tweet7 = Tweet.new("Life is a wonderous place", tea_uncle)

puts "******"

coffee_dad.like_tweet(tweet5)
coffee_dad.like_tweet(tweet6)
tea_uncle.like_tweet(tweet1)
puts coffee_dad.liked_tweets.include?(tweet5)
puts coffee_dad.liked_tweets

puts coffee_dad.liked_messages.include?("I need tea")

puts tweet5.likers.include?(coffee_dad)

coffee_dad.like_tweet(tweet1)
coffee_dad.like_tweet(tweet1)
puts coffee_dad.liked_tweets.count(tweet1) == 1

coffee_dad.unlike_tweet(tweet1)
puts coffee_dad.liked_tweets.count(tweet1) == 0
