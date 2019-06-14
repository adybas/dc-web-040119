require "byebug"
class Api::V1::AuthController < ApplicationController

  def create # POST /api/v1/login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      #the username is found AND the password is a match
      payload = {user_id: @user.id}
      token = encode(payload)
      render json: {
        message: "Correct user name and password. Logging in...",
        user: @user,
        token: token,
        authenticated: true
      }, status: :ok
    else
      #the username could not be found OR the username was found but
      #the password is not a match
      render json: {
        message: "Incorrect username or password",
        authenticated: false
      }, status: :unauthorized
    end
  end

end
