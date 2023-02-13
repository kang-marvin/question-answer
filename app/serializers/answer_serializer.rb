class AnswerSerializer < ActiveModel::Serializer
  attributes :content_body,
             :correct?

  def correct?
    object.answer_is_the_correct_solution?
  end
end
