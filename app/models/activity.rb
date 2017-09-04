class Activity < ApplicationRecord
  belongs_to :user

  enum activity_type: [:assignment, :event, :exam, :quiz, :work, :birthday, :holiday, :generic, :class]

end
