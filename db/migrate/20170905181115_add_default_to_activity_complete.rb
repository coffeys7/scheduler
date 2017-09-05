class AddDefaultToActivityComplete < ActiveRecord::Migration[5.1]
  def change
    remove_column :activities, :complete, :boolean
    add_column :activities, :complete, :boolean, default: false
  end
end
