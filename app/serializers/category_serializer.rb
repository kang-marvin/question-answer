class CategorySerializer < ActiveModel::Serializer
  attributes :id, :title, :question_ids

  def question_ids
    object.questions.ids
  end
end
