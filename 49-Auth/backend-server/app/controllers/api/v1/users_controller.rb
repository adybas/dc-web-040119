require "byebug"

class Api::V1::UsersController < ApplicationController

  def show
    render json: User.find(params[:id]), status: :accepted
  end

  def profile
    token = request.headers["Authentication"].split(" ")[1]
    payload = decode(token)
    @user = User.find(payload["user_id"])
    render json: @user
  end

end
