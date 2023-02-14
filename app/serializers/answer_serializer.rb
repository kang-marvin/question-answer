class AnswerSerializer < ActiveModel::Serializer
  attributes :id,
             :content_body,
             :is_correct

  def is_correct
    object.answer_is_the_correct_solution?.to_s
  end
end
