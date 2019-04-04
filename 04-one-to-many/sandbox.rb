class School

    attr_accessor :name
    attr_reader :instructors

    def initialize(name)
        @name = name
        @instructors = []
    end

    def add_instructor(new_teacher)
        @instructors << new_teacher

    end

    # def instructors
    #     @instructors
    # end

end

class Instructor

    attr_accessor :name

    def initialize(name)
        @name = name
    end


end

flatiron = School.new("Flatiron")

puts flatiron.name == "Flatiron"

paul = Instructor.new("Paul Nicholsen")
flatiron.add_instructor(paul)

# print flatiron.instructors

bruno = Instructor.new("Bruno Garcia")
jc = Instructor.new("JC Change")
flatiron.add_instructor(bruno)
flatiron.add_instructor(jc)

print flatiron.instructors
puts "\n*******\n"

bruno.name = "Bruno Obama"

print flatiron.instructors
# flatiron.instructors = ["Albert Einstein", "Bill Nye"]