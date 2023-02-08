class Question < ApplicationRecord
  belongs_to :category

  has_rich_text :content

  validate :content, presence :true
end
