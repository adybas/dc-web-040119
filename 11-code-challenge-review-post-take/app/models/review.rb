class Review
  @@all = []

  attr_reader(:rating, :content, :restaurant, :customer)

  def self.all
    @@all
  end

  def initialize(restaurant, customer, content, rating)

    # build a helper method that checks rating and employ it here
    if rating > 5
      @rating = 5
    elsif rating < 1
      @rating = 1
    else
      @rating = rating
    end

    @content = content

    @restaurant = restaurant
    @customer = customer

    @@all << self
  end



end
