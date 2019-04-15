class Restaurant
  attr_reader :name

  @@all = []

  def self.all
    @@all
  end

  def initialize(name)
    @name = name

    @@all << self
  end


  def self_reviews
    Review.all.select do |review|
      review.restaurant == self
    end
  end

  def average_star_rating
    # need to get self_reviews

    # total sum / num of reviews

    # get the sum of ratings
    total = 0

    self.self_reviews.each do |review|
      total += review.rating
    end

    binding.pry
    # total sum / num of reviews

    num_self_reviews = self_reviews.count

    return total / num_self_reviews
  end


  def longest_review
    # returns the longest review content for a given restaurant

    #self is the restaurant

    # get this restaurant's reviews

    longest_review_obj = nil
    longest_review_length = -1
    # need to go through all of this restaurant's reviews
    self_reviews.each do |review|
      if review.content.length > longest_review_length
        # keep track of this review (b/c it so far is the longest review)
        longest_review_obj = review
        # keep ttrack of its length for further comparison
        longest_review_length = review.content.length
      end

    end

    # return the longest review
    longest_review_obj
  end

end
