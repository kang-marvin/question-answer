class AddMissingColumn < ActiveRecord::Migration[7.0]
  def up
    add_column :answers,
               :is_correct_solution,
               :boolean,
               default: false,
               if_not_exists: true
  end
end
