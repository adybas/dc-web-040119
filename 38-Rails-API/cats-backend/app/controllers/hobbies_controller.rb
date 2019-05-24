class HobbiesController < ApplicationController

  def index
      render json: Hobby.all
  end

  def create
      ##any type of logic 
      render json: {message: "Nah, you can't create a hobby"}
  end

end
