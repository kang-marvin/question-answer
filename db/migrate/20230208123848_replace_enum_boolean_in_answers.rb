class ReplaceEnumBooleanInAnswers < ActiveRecord::Migration[7.0]
  def change
    remove_column :answers, :solution

    add_column :answers, :is_correct_solution, :boolean, default: false
  end
end
