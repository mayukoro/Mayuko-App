class RemoveNameFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name, :text
  end
end
