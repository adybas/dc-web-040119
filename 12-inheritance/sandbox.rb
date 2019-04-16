require 'pry'

module Swimmable

    def can_swim?
        return true
    end

    def swim
        return "going for a dip"
    end
end

class Animal

    def initialize(name)
        @name = name
    end

    def introduce
        puts "Hi my name is #{self.name} and I am a #{self.species}"
    end

    def can_swim?
        return false
    end
end


class Mammal < Animal

    def is_warm_blooded?
        return true
    end
end

class Dog < Mammal

    attr_accessor :name, :species, :age

    include Swimmable

    DOG_YEARS = 7

    def initialize(name, age)
        super(name)
        @species = "canine"
        @age = age
    end

    def human_age
        if human_years > 50
            return "This is a senior dog"
        else
            return "This is a young dog"
        end
    end

    private

    def human_years
        return self.age * DOG_YEARS
    end

    def second_private_method
        return "shh"
    end
end

class Cat < Mammal

    attr_accessor :name, :species

    def initialize(name)
        super(name)
        @species = "feline"
    end

    def introduce
        super()
        puts "I don't know you, leave me alone."
    end
end

class Fish < Animal

    include Swimmable
    def initialize(name)
        super(name)
        @species = "fishie"
    end

end


fido = Dog.new("Fido", 5)
ella = Cat.new("Ella")

binding.pry
0