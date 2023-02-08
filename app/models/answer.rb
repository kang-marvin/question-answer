class Answer < ApplicationRecord
  belongs_to :question

  has_rich_text :content


  def content_body(self)
    super(self)
  end
end
