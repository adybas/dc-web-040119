class Guest

    attr_reader :name

    def initialize(name)
        @name = name
    end

    # def name
    #     @name
    # end

    # def change_name(new_name)
    #     @name = new_name
    # end

end

# tom = Guest.new("Tom")
# tom.change_name("Something else")

# tom.name= # does not exist

# Type in your new name:

# > Miranda

# user.name = "Miranda"