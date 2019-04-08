require 'pry'

class Owner

  @@all = []


  def initialize(species)
    # binding.pry
    @pets = {fishes: [], cats: [], dogs: []}
    @species = species
    @@all << self
  end

  # instance methods

  def species
    @species
  end

  def say_species
    "I am a #{species}."
  end

  def name=(name)
    @name = name
  end

  def name
    @name
  end

  def pets
    @pets
  end

  def pets=(x)
    @pets = x
  end

  def buy_fish(fish_name)
    #  can buy a fish that is an instance of the Fish class (FAILED - 1)
    fish = Fish.new(fish_name)
    # add new fish to self collection / my fishes
    pets[:fishes] << fish

  end

  def buy_cat(cat_name)
    #  can buy a cat that is an instance of the Fish class (FAILED - 1)
    cat = Cat.new(cat_name)
    # add new cat to self collection / my cates
    pets[:cats] << cat

  end

  def buy_dog(dog_name)
    #  can buy a dog that is an instance of the Fish class (FAILED - 1)
    dog = Dog.new(dog_name)
    # add new dog to self collection / my doges
    pets[:dogs] << dog

  end

  def walk_dogs
    # get all my dogs
    # iterate over dogs
    # change mood to "happy"
    # binding.pry
    pets[:dogs].each do |anything|
      # binding.pry
      anything.mood = "happy"
    end
  end

  def play_with_cats
    # get all my cats
    # iterate over cats
    # change mood to "happy"
    # binding.pry
    pets[:cats].each do |cat|
      cat.mood = "happy"
    end
  end

  def feed_fish
    # get all my fish
    # iterate over fish
    # change mood to "happy"
    # binding.pry
    # pets[:fishes].each do |fish|
    #   fish.mood = "happy"
    # end
    pets[:fishes].each{|fish| fish.mood = "happy"}
  end

  def sell_pets
    # clear out each pet array
    # mood must be changed to nervous
    self.pets.each do |species_key, pet_array|
      pet_array.each { |pet_obj| pet_obj.mood = "nervous" }
      pet_array.clear
    end
    # self.pets.each do |species|
    #   species[1].each do |pet_obj|
    #     pet_obj.mood = "nervous"
    #   end
    #   species[1].clear
    # end
  end

  def list_pets
    fishes_num = pets[:fishes].count
    dogs_num = pets[:dogs].count
    cats_num = pets[:cats].count

    "I have #{fishes_num} fish, #{dogs_num} dog(s), and #{cats_num} cat(s)."
  end


  # class methods
  def self.all
    @@all
  end

  def self.count
    self.all.size
  end

  def self.all=(x)
    @@all = x
  end

  def self.reset_all
    self.all = []
  end


end
