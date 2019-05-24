# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.find_or_create_by(name: 'Luke', breed: 'Tabby', gender: 'Male', quote: 'You are not my father', image_url: "http://catplanet.org/wp-content/uploads/2014/02/Luke.jpg")
Cat.find_or_create_by(name: 'Henri', breed: 'Black and White', gender: 'Male', quote: 'sacrebleu', image_url: "https://www.tubefilter.com/wp-content/uploads/2014/03/henri-le-chat-noir.jpg")
Cat.find_or_create_by(name: 'Garfield', breed: 'Tabby', gender: 'Male', quote: 'I like lasagna', image_url: "https://vignette.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg/revision/latest?cb=20180421131132")
Cat.find_or_create_by(name: 'Mufasa', breed: 'Lion', gender: 'Male', quote: 'Everything that the light touches is yours, Simba', image_url: "https://vignette.wikia.nocookie.net/disney/images/5/5e/Mufasa_Lion_King_.jpg/revision/latest?cb=20180913082349")

Hobby.find_or_create_by(description: "Scratch" , materials: "claws")
Hobby.find_or_create_by(description: "Sleep" , materials: "bed, pillow")
Hobby.find_or_create_by(description: "Meow" , materials: "n/a")

CatHobby.find_or_create_by(cat_id: 1, hobby_id: 1)
CatHobby.find_or_create_by(cat_id: 1, hobby_id: 2)
CatHobby.find_or_create_by(cat_id: 2, hobby_id: 2)
CatHobby.find_or_create_by(cat_id: 2, hobby_id: 3)
CatHobby.find_or_create_by(cat_id: 3, hobby_id: 1)
CatHobby.find_or_create_by(cat_id: 3, hobby_id: 3)
CatHobby.find_or_create_by(cat_id: 4, hobby_id: 1)
CatHobby.find_or_create_by(cat_id: 4, hobby_id: 3)
