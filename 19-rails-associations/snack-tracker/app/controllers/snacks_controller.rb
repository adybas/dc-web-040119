class SnacksController < ApplicationController
  
  before_action :find_snack, only: [:edit, :update, :show]

  def index
    @snacks = Snack.all
  end

  def show
  end

  def new
    @snack = Snack.new
  end

  def create
    @snack = Snack.create(strong_params)
    redirect_to @snack
  end

  def edit
  end

  def update
    @snack.update(strong_params)
    redirect_to snack_path(@snack)
  end

  def destroy
    Snack.destroy(params[:id])
    redirect_to snacks_path
  end

  def find_snack
    @snack = Snack.find(params[:id])
    # then save to database
    # email my mom
    # break this function up because now it does too much
  end

  def favorites
  end

  # def activate_student
  #   student = Student.find(params[:id])
  #   student.toggle_activate
  #   redirect_to "www.bored.com"
  # end

  private

  def strong_params
    params.require(:snack).permit(:name, :deliciousness, :calories)
  end   

end
