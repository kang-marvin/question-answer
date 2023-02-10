class QuestionSerializer < ActiveModel::Serializer
  attributes :difficulty_level,
             :content_body,
             :countdown_timer

  has_many :answers, serializer: AnswerSerializer
end
