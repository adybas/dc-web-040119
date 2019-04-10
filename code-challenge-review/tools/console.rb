require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

buffy = Guest.new("Buffy")

puts "Guest knows their name?"
puts buffy.name == "Buffy"

buffy_house = Listing.new("Sunnydale")

puts "Listing knows its city?"
puts buffy_house.city == "Sunnydale"
Pry.start
