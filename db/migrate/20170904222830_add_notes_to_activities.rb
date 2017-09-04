class AddNotesToActivities < ActiveRecord::Migration[5.1]
  def change
    add_column :activities, :notes, :string
  end
end
