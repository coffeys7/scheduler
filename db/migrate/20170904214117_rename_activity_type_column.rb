class RenameActivityTypeColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :activities, :type, :integer
    add_column :activities, :activity_type, :integer
  end
end
