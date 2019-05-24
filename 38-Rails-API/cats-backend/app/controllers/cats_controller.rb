class CatsController < ApplicationController

  def index
    # data = Cat.all.map { |c| c.breed + c.quote }
    render json: Cat.all
  end

  def show
    render json: Cat.find(params[:id])
  end

  def create
    #make a new Cat resource
    #render json: that new cat
    render json: Cat.create(cat_params)
  end

  def destroy
    render json: Cat.find(params[:id]).destroy
  end

  def update
    #update a cat
    #render that update cat
    Cat.find(params[:id]).update(cat_params)
    render json: Cat.find(params[:id])
  end

  def random
    #any logic your heart desires here
    render json: {message: "Congrats! you found the easter egg"}
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :image_url, :quote)
  end

end
