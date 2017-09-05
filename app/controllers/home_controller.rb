class HomeController < ApplicationController

  def settings

  end

  def month
    @user = current_user
    render 'users/month_calendar'
  end

  def week
    @user = current_user
    render 'users/week_calendar'
  end

end