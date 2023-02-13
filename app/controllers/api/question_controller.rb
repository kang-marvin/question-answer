module API
  class QuestionController < ApplicationController

    before_action :fetch_question, only: %i[show]

    def show
      render json: @question,
             serializer: QuestionSerializer,
             status: :ok
    end

    private

    def fetch_question
      @question =
        Question.find(question_params[:identifier]) rescue Question.new
    end

    def question_params
      params.permit(:identifier).with_defaults(identifier: 0)
    end
  end
end