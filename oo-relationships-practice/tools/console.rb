require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

jeff = Driver.new("Jeff Gordan")
dale = Driver.new("Dale Earnhart")
rick = Driver.new("Rick Rickerson")

rosa = Passenger.new("Rosa Parks")
amelia = Passenger.new("Amelia Earhart")

short_trip = Ride.new(rosa, jeff, 2.0)
medium_trip = Ride.new(rosa, dale, 50.0)
long_trip = Ride.new(amelia, dale, 200.0)

puts "Driver knows his name?"
puts jeff.name == "Jeff Gordan"

puts "Ride knows its distance?"
puts short_trip.distance == 2.0

puts "Ride's distance is a float?"
puts short_trip.distance.class == Float

puts "Driver.all knows all its drivers?"
puts Driver.all.include?(jeff)
puts Driver.all.include?(dale)

puts "Passenger.all knows all the passenger"
puts Passenger.all.include?(rosa)

puts "Passenger knows their rides?"
puts rosa.rides.include?(medium_trip)
# puts rosa.rides == [short_trip, medium_trip]

puts "Passenger knows all of their drivers"
puts rosa.drivers.include?(dale)

puts "Driver knows all of their passengers"
puts jeff.passengers.include?(rosa)

puts "Driver class has mileage cap"
puts Driver.mileage_cap(100).include?(dale)
puts !Driver.mileage_cap(100).include?(jeff)

puts dale.total_distance == 250.0
Pry.start
