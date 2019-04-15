class Customer
  attr_reader :first_name, :last_name

  @@all = []


  def self.all
    @@all
  end


  # instance methods below
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name  = last_name
    @@all << self
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def add_review(restaurant_instance, content_string, rating_integer)
    # given a **restaurant object**, some review content (as a string), and a star rating (as an integer), creates a new review and associates it with that customer and restaurant.

    # customer -< reviews >- restaurant
    # self => customer_instance
    # getting the restaurant as an argument

    #Review.new(??????)
    Review.new(restaurant_instance, self, content_string, rating_integer)
  end

  def num_reviews
    # Returns the total number of reviews that a customer has authored

    # get Reviews
      # get all reviews
      # filter from all reviews => just self reviews

    # return the number of reviews

    Review.all.select do |review_instance|
      #return of the block be true or false
      binding.pry
      # review_instance.x
    end



  end


end
