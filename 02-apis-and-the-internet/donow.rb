# For each of the following examples, write two methods that solve the 
# problem:  One that uses `.each` and one that uses one of the higher level 
# iterator methods

# Remember:

# map/collect:  Returns an array where each value of the original array 
# corresponds to an element in the new array

# find/detect:  Returns the first element for which the statement in the block
# evaluates as True

# select/find_all:  Returns an array of _all_ elements for which the statement in
# the block evaluates as True

nums = (1..20).to_a #creates an array of all numbers from 1-20

# 1.  Create an array of numbers where each new number is three times as big as
# its original number (e.g., [3, 6, 9, ...])

# three_times = []
# nums.each do |number|
#     three_times.push(number * 3)
# end
# print three_times

# three_times = nums.map do |item|
#     item * 3
# end

# print three_times

# 2.  Find the first number that is divisible by 7

# puts nums.find {|num| num % 7 == 0}

# 3.  Find all numbers that are divisible by 7

# print nums.select {|num| num % 7 == 0}

# 4.  Find the first number that is divisible by 7 AND greater than 10

# print nums.find {|num| num % 7 == 0 && num > 10}


# Bonus:


# 5.  Create an array of the squares (the number times itself) of all numbers (in the range, Ann)
# that are divisible by 7

squares = nums.select {|num| num % 7 == 0}.map {|num| num ** 2}
print squares