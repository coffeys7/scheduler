class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :activities

  def activities_for_day(day)
    self.activities.where(:date => day.beginning_of_day).order('start_time')
  end

end
