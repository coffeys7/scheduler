class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_filter :set_time_zone, if: :user_signed_in?

  def home
    @user = current_user
    render 'users/home'
  end

  private

    def set_time_zone
      Time.zone = current_user.time_zone
    end

end

