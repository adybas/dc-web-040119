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

tokyo_house = Listing.new("Tokyo")
willow_house = Listing.new("Sunnydale")
puts "Find all by city?"
puts Listing.find_all_by_city("Sunnydale").include?(buffy_house)
puts !Listing.find_all_by_city("Sunnydale").include?(tokyo_house)

puts "Find all by name?"
puts Guest.find_all_by_name("Buffy").include?(buffy)

buffy_trip = Trip.new(tokyo_house, buffy)

puts "Trip knows its guest and listing?"
puts buffy_trip.guest == buffy 
puts buffy_trip.listing == tokyo_house
Pry.start
