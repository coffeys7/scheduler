class Activity < ApplicationRecord
  belongs_to :user

  enum type: [:assignment, :event, :exam, :quiz, :work, :birthday, :holiday, :generic]

end
