# A puppy is initialized with a cuteness score of 5.  A puppy can raise
# its cuteness score by 3 points if it gets groomed, and lower its score
# by 5 points playing in the mud.  

# The following code works, but there are some problems.  Refactor this code 
# to improve it.  (The code can be downloaded from your learn.co page under
# lecture 04)

class Puppy

    attr_reader :name, :cuteness

    def initialize(name)
        @name = name
        @cuteness = 5
    end

    def cuteness=(cuteness)
        @cuteness = cuteness.clamp(1, 10)
        # if @cuteness > 10
        #     @cuteness = 10
        # elsif @cuteness < 1
        #     @cuteness = 1
        # end

        # @cuteness = @cuteness > 10 || @cuteness < 1 ? 10 || 1 : @cuteness
    end

    def play_in_the_mud
        self.cuteness -= 5
    end

    def take_a_bath
        puts self.name
        self.cuteness += 3 
    end    
end

fido = Puppy.new("Fido")
puts fido.cuteness == 5 # test initial cuteness
fido.play_in_the_mud
puts fido.cuteness == 1 # test that take a bath raises cuteness by 3
# fido.play_in_the_mud
# puts fido.cuteness == 10 # test that cuteness cannot exceed 10
