# ella = {name: "Ella", color: "black"}

# puts ella[:name]

# lexi = {name: "Lexi", color: "orange"}

class Cat

    # attr_reader :name # getter
    attr_writer :floofiness # setter
    attr_accessor :color, :number_of_legs  # both

    @@all = []

    def initialize(name, color, floofiness, number_of_legs=4)
        # called every time you write .new
        @name = name
        @color = color
        @floofiness = floofiness
        @number_of_legs = number_of_legs
        @@all << self

    end

    def self.all
        @@all
    end
    
    def self.get_all_names
        Cat.all.collect {|cat| cat.name}
    end

    def say_hello
        # when self is inside an instance method, 
        # self refers to the instance
        puts "I am a cat named #{self.name}"
    end

    def floofiness
        # custom getter
        if @floofiness >= 5
            "This is a very floofy kitty"
        else
            "This is not such a floofy kitty, but still better than a dog."
        end
    end

    def name
        # GETTER
        @name.upcase
    end

    def show_self
        # instance method:  ella.show_self
        puts self
    end

    def self.say_class_name
        # when self is in a method name, self refers to the entire class
        # Cat.say_class_name
        "I am the Cat class"
    end

    # def color
    #     # GETTER
    #     @color
    # end

    # def color=(new_color)
    #     # SETTER
    #     @color = new_color
    # end

    # def floofiness=(floofiness)
    #     @floofiness = floofiness
    # end

end

ella = Cat.new("ella", "black", 10)
lexi = Cat.new("Lexi", "orange", 4, 3)
garfield = Cat.new("Garfield", "orange", 2)
# ella.say_hello

# ella.color=("blue")

# puts ella.color

# puts ella.instance_of?(Cat)

# puts lexi.floofiness
# ella.name= "Something else"

# puts ella.number_of_legs
# puts lexi.number_of_legs
# puts Cat.get_all_names

puts Cat.all.collect {|cat| cat.name}
