class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|

      t.string :title
      t.datetime :date
      t.datetime :start_time
      t.datetime :end_time
      t.integer :user_id
      t.integer :type
      t.boolean :complete

      t.timestamps
    end
  end
end
