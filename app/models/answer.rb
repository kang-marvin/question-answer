class Answer < ApplicationRecord
  LIMIT_PER_QUESTION = 4

  belongs_to :question

  has_rich_text :content

  before_validation :validate_quota

  def content_body
    super(self)
  end

  private

  def validate_quota
    return unless self.question
    if self.question.answers.reload.size >= LIMIT_PER_QUESTION
      errors.add(:base, 'Association limit exceeded.')
    end
  end
end
