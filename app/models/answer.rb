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
    self.question
      .answers
      .where.not(id: self&.id)
      .update_all(is_correct_solution: false)
  end

  def validate_quota
    return unless self.question
    if self.question.answers.reload.size > LIMIT_PER_QUESTION
      errors.add(:base, 'Association limit exceeded.')
    end
  end
end
