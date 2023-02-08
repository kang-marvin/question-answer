class Answer < ApplicationRecord
  belongs_to :question

  has_rich_text :content


  def content_body
    super(self)
  end
end
