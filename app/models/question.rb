class Question < ApplicationRecord
  belongs_to :category
  has_many :answers, dependent: :destroy

  has_rich_text :content

  validates :content, presence: true

  def content_body(self)
    super(self)
  end
end
