require_relative "./tweet.rb"
require_relative "./user.rb"

coffee_dad = User.new("Coffee Dad")

puts coffee_dad.instance_of? User 
puts coffee_dad.username == "Coffee Dad"

tweet1 = Tweet.new("I love coffee", coffee_dad)
puts tweet1.message == "I love coffee"

puts "Tweet knows its user?"
puts tweet1.user == coffee_dad

tweet2 = Tweet.new("I need coffee", coffee_dad)
tweet3 = Tweet.new("Life is a meaningless void", coffee_dad)
puts "Tweet.all returns all tweets"
puts Tweet.all == [tweet1, tweet2, tweet3]

tweet4 = Tweet.new("Want some more coffee", coffee_dad)

puts Tweet.all.include?(tweet4)

puts "Tweet knows its user"
puts tweet2.username == "Coffee Dad"

tea_uncle = User.new("Tea Uncle")
tweet5 = Tweet.new("Sipping some tea", tea_uncle)

puts "User knows their tweets"
puts coffee_dad.tweets.include?(tweet1)
puts coffee_dad.tweets.include?(tweet2)
puts !coffee_dad.tweets.include?(tweet5)

tweet6 = coffee_dad.post_tweet("So tired")
puts coffee_dad.tweets.include?(tweet6)

