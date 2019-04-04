class School

    attr_accessor :name
    attr_reader :instructors

    def initialize(name)
        @name = name
        @instructors = []
    end

    def add_instructor(instructor)
        @instructors << instructor
    end

    def find_instructor_named(name)
        # iterate through instructor array
        puts self
        self.instructors.find do |instructor|
        # find the one whose name matches inputted parameter
            instructor.name == name
        end

    end

end

class Instructor

    attr_accessor :name, :favorite_food

    def initialize(name, favorite_food)
        @name, @favorite_food = name, favorite_food
    end

    def introduce 
        puts "Hi my name is #{self.name}"
    end 
end

flatiron = School.new("Flatiron")
paul = Instructor.new("Paul", "Pizza")
melanie = Instructor.new("Melanie", "Indian")
jake = Instructor.new("Jake", "Chips")

flatiron.add_instructor(paul)
flatiron.add_instructor(melanie)
flatiron.add_instructor(jake)

# puts flatiron.instructors[1]
# puts flatiron.instructors[1].introduce
print flatiron.find_instructor_named("Melanie") == melanie
