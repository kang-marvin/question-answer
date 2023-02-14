import React, { useState, useEffect } from "react"
import { categoryApi, questionApi } from "../../api"

import CategoryPanel from "../helper/CategoryPanel"
import TimerPanel from "../helper/TimerPanel"
import ProgressBarField from "../form_fields/ProgressBarField"
import QuestionPanel from "../helper/QuestionPanel"
import QuestionControlsPanel from "../helper/QuestionControlsPanel"

const ZERO = 0

const INITIAL_CATEGORY = {
  id: null,
  title: null,
  question_ids: []
}

const INITIAL_QUESTION = {
  id: null,
  content_body: null,
  countdown_timer: null,
  answers: []
}

const FetchCategory = (params) => {
  return categoryApi.getCategory(params)
}

const FetchCategoryQuestion = (params) => {
  return questionApi.getQuestion(params)
}

const CategoryQuestionsCount = (state) => {
  return state.category.question_ids?.length || ZERO
}

const QuestionAtPositionIndex = (state, index) => {
  return state.category.question_ids[Number(index)]
}

const QuestionsPage = props => {

  const [state, setState] = useState({
    nextQuestionIndex: ZERO,
    category: INITIAL_CATEGORY,
    question: INITIAL_QUESTION
  })

  useEffect(() => {
    FetchCategory({ identifier: 10 }).then((response) => {
      setState({
        ...state,
        category: (response.data.category || INITIAL_CATEGORY)
      })
    })
  }, [])

  useEffect(() => {
    if (CategoryQuestionsCount(state) > 0) {
      FetchAndUpdateQuestion({
        identifier: QuestionAtPositionIndex(state, state.nextQuestionIndex)
      })
    }
  }, [state.category.id])

  const FetchAndUpdateQuestion = (params) => {
    FetchCategoryQuestion(params).then((response) => {
      setState({
        ...state,
        question: (response.data.question || INITIAL_QUESTION),
        nextQuestionIndex: (state.nextQuestionIndex + 1)
      })
    })
  }

  const handleStopTimer = () => {
    console.log("timer stopped")
  }

  const handleSubmitAnswer = () => {
    console.log("answer to question submitted")
  }

  return (
    <div className="flex gap-1">
      <div className="flex-auto w-11/12 rounded overflow-hidden shadow-lg">

        <CategoryPanel
          title={state.category.title}
          questionsCount={CategoryQuestionsCount(state)}
        />

        <ProgressBarField
          currentValue={state.nextQuestionIndex}
          maximumValue={CategoryQuestionsCount(state)}
        />

        <QuestionPanel question={state.question}>
          <QuestionControlsPanel
            hasTimeElapsed={false}
            hasSelectedAnAnswer={false}
            hasSubmittedAnswer={true}
            isLastQuestion={true}
            handleSubmit={handleSubmitAnswer}
          />
        </QuestionPanel>

      </div>

      <TimerPanel
        countdown={Number(state.question.countdown_timer)}
        stopTimer={handleStopTimer}
      />
    </div>

  )
}

export default QuestionsPage