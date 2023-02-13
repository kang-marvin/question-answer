class ReplaceEnumBooleanInAnswers < ActiveRecord::Migration[7.0]
  def up
    remove_column :answers, :solution, :boolean
  end

  def down
    add_column :answers, :is_correct_solution, :boolean, default: false
  end
end
