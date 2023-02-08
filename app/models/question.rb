class Question < ApplicationRecord
  belongs_to :category

  has_rich_text :content

  validates :content, presence: true

  def content_body
    self.content.body.to_html
  end
end
