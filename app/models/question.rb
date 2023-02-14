# == Schema Information
#
# Table name: questions
#
#  id               :bigint           not null, primary key
#  category_id      :bigint           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  difficulty_level :integer          default("simple")
#
class Question < ApplicationRecord
  TIMER = {
    simple: 15, easy: 25,
    intermediate: 40, hard: 55,
    expert: 90
  }.freeze

  belongs_to :category
  has_many :answers, dependent: :destroy

  has_rich_text :content

  validates :content, presence: true

  enum :difficulty_level, {
    simple: 0,
    easy: 1,
    intermediate: 2,
    hard: 3,
    expert: 4
  }, default: :simple

  def content_body
    super(self)
  end

  def countdown_timer
    TIMER[difficulty_level.to_sym].to_i
  end
end
