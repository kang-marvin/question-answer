import React, { useState, useEffect } from "react"
import { categoryApi, questionApi } from "../../api"

import CategoryPanel from "../helper/CategoryPanel"
import TimerPanel from "../helper/TimerPanel"
import ProgressBarField from "../form_fields/ProgressBarField"

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

        <div className="flex flex-col p-8">
          {/* Question content */}
          <h2 className="text-gray-900 text-xl mb-2">[[QUESTION BODY]]</h2>

          {/* Answer Options */}
          <div className="flex flex-col gap-2">
            <label className="border rounded-b px-4 py-3">
              <p className="bg-grey-100">[[ANSWER 1]]</p>
            </label>
            <label className="border rounded-b px-4 py-3">
              <p className="bg-grey-100">[[ANSWER 2]]</p>
            </label>
            <label className="border rounded-b px-4 py-3">
              <p className="bg-grey-100">[[ANSWER 3]]</p>
            </label>
            <label className="border rounded-b px-4 py-3">
              <p className="bg-grey-100">[[ANSWER 4]]</p>
            </label>
          </div>

          {/* Controls */}
          <div className="flex px-2 m-4">
            <span className="flex-auto w-8/12"></span>
            <button disabled className="flex-auto w-4/12 bg-red-100 text-red-500 font-bold py-3 px-4 m-2 border rounded-full">[[NO ANSWER SUBMITTED]]</button>
            <button className="flex-auto w-4/12 bg-sky-700 text-white font-bold py-3 px-4 m-2 border rounded">[[NEXT QUESTION]]</button>
          </div>

        </div>
      </div>

      <TimerPanel
        countdown={Number(state.question.countdown_timer)}
        stopTimer={handleStopTimer}
      />
    </div>

  )
}

export default QuestionsPage