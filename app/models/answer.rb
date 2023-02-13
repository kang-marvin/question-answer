# == Schema Information
#
# Table name: answers
#
#  id                  :bigint           not null, primary key
#  question_id         :bigint           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  is_correct_solution :boolean          default(FALSE)
#
class Answer < ApplicationRecord
  LIMIT_PER_QUESTION = 4

  belongs_to :question

  has_rich_text :content

  before_validation :validate_quota
  after_save :set_only_one_correct_answer_per_question, if: :answer_is_the_correct_solution?

  def content_body
    super(self)
  end

  def answer_is_the_correct_solution?
    is_correct_solution
  end

  private

  def set_only_one_correct_answer_per_question
    question
      .answers
      .where.not(id: self&.id)
      .update_all(is_correct_solution: false)
  end

  def validate_quota
    return unless question

    return unless question.answers.reload.size > LIMIT_PER_QUESTION

    errors.add(:base, 'Association limit exceeded.')
  end
end
