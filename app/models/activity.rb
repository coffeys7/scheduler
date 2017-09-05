class Activity < ApplicationRecord
  belongs_to :user
  after_create :ensure_correct_date

  enum activity_type: [:assignment, :event, :exam, :quiz, :work, :birthday, :holiday, :generic, :class]

  def ensure_correct_date
    self.update_attribute(:date, (self.date || Time.now).beginning_of_day)
  end

end
