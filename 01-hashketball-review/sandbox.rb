require "pry"

def get_instructors
    return [
      {name: "Paul", role: "lead"},
      {name: "Bruno", role: "tcf"},
      {name: "JC", role: "tcf"}
    ]
end

# Write a method that returns the role of the 
# employee named JC

def get_role(instructor_name)
  get_instructors.each do |instructor|
    if instructor[:name] == instructor_name
      return instructor[:role]
    end
  end
end

def find_role(instructor_name)
    instructor = get_instructors.find do |instructor|
        instructor[:name] == instructor_name
    end
    instructor[:role]
end

def find_tcf
    get_instructors.select do |instructor|
        instructor[:role] == "tcf"
    end.collect {|instr| instr[:name]}

end

names = find_tcf()
# binding.pry
puts names.include?("Bruno")
puts names.include?("JC")
puts !names.include?("Paul")

# puts find_role("JC")
# ["Paul", "Bruno", "JC"]

# names = []
# instructors.each do |instr|
#   names << instr[:name]
# end

# print "\n\n"
# print instructors
# print "\n\n"

# names = instructors.collect do |instr|
#   instr[:name]
# end

# print "\n\n"
# print instructors
# print "\n\n"
# print names
