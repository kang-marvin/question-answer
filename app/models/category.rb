# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
  has_many :questions, dependent: :destroy

  validates :title, presence: true

  scope :filter_title, -> (query) do
    where('title ILIKE :query', query: "%#{query}%") if query
  end
end
