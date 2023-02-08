class Answer < ApplicationRecord
  belongs_to :question

  has_rich_text :content

  enum :solution, { incorrect: 0, correct: 1 }, suffix: true

  def content_body(self)
    super(self)
  end
end
