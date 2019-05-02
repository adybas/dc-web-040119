# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

alaska = State.find_or_create_by(name: "Alaska", abbreviation: "AK", bird: "Penguin", year_founded: 1953)
hawaii = State.find_or_create_by(name: "Hawaii", abbreviation: "HI", bird: "Nene", year_founded: 1951)
wyoming = State.find_or_create_by(name: "Wyoming", abbreviation: "WY", bird: "Seagull", year_founded: 1951)

juneau = City.find_or_create_by(name: "Juneau", state: alaska, capital?: true)
anchorage = City.find_or_create_by(name: "Anchorage", state: alaska, capital?: false)