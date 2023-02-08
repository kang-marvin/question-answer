class QuestionSerializer < ActiveModel::Serializer
  attributes :id,
             :difficulty_level,
             :content_body,
             :countdown_timer
end
