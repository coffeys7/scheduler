class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  def home
    @user = current_user
    render 'users/home'
  end

end

