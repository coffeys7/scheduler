class Activity < ApplicationRecord
  belongs_to :user
  after_create :ensure_correct_date

  enum activity_type: [:assignment, :event, :exam, :quiz, :work, :birthday, :holiday, :generic, :class]

  def ensure_correct_date
    self.update_attribute(:date, (self.date || Time.now).beginning_of_day)
  end

  def time_range_str(opts={})
    format = opts[:format] || '%-I:%M%p'
    start_time_str = self.start_time.strftime(format) rescue false
    end_time_str = self.end_time.strftime(format) rescue false
    if start_time_str && end_time_str
      "(#{ start_time_str } - #{ end_time_str })"
    elsif start_time_str
      "(#{ start_time_str } - N/A)"
    else
      false
    end
  end

  def elapsed?
    if self.end_time.nil?
      (Time.now.beginning_of_day > self.date.beginning_of_day)
    else
      end_time = Time.parse("#{ self.date.strftime('%Y-%m-%d') } #{ self.end_time.strftime('%H:%M') }") rescue false
      end_time ? (Time.now > end_time) : false
    end
  end

  def edit_link
    "/activities/#{ self.id }"
  end

end
