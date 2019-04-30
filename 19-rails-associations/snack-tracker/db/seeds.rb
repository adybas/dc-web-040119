# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Snack.destroy_all
Retailer.destroy_all

gs = Retailer.create(name: "Girl Scouts", year_established: 1900)
hostess = Retailer.create(name: "Hostess", year_established: 1912)

Snack.create(name: "Trefoils", calories: 600, deliciousness: 6, retailer: gs)
Snack.create(name: "Twinkies", calories: 750, deliciousness: 5, retailer: hostess)