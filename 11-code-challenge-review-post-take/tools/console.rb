require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

chipotle = Restaurant.new("Chipotle")
bruno = Customer.new("Bruno", "Garcia Gonzalez")
Review.new(chipotle, bruno, "asdasdasdasd", 5)
Review.new(chipotle, bruno, "a", 5)
Review.new(chipotle, bruno, "qw", 5)
Review.new(chipotle, bruno, "dfasda", 5)
Review.new(chipotle, bruno, "asdasdasdasdasdasd", 5)
Review.new(chipotle, bruno, "asdasssdasdasd", 5)
Review.new(chipotle, bruno, "11111", 5)
Review.new(chipotle, bruno, "asdasd", 5)
Review.new(chipotle, bruno, "op", 5)
Review.new(chipotle, bruno, "ppppppp", 5)
Review.new(chipotle, bruno, "tyuioiuy", 5)
Review.new(chipotle, bruno, "qwerty", 5)
Review.new(chipotle, bruno, "xcvvcx", 5)
Review.new(chipotle, bruno, "v", 5)
Review.new(chipotle, bruno, "x", 5)
chipotle.average_star_rating
# not pry below
binding.pry
0 #leave this here to ensure binding.pry isn't the last line
