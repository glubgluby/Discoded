class Api::UsersController < ApplicationController

  def index
    @channel = Channel.includes(:users).find(params[:id])
    @users = @channel.users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:channels).find(params[:id])
    render :show
  end
  
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
  
end