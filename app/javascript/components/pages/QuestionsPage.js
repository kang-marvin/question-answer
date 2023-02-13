import React, { useState, useEffect } from "react"
import { categoryApi, questionApi } from "../../api"

const INITIAL_CATEGORY = {
  id: null,
  title: null,
  questions_ids: []
}

const INITIAL_QUESTION = {
  id: null,
  content_body: null,
  countdown_timer: 0,
  answers: []
}

const FetchCategory = (params) => {
  return categoryApi.getCategory(params)
}

const FetchCategoryQuestion = (params) => {
  return questionApi.getQuestion(params)
}

const CategoryQuestionsCount = (state) => {
  return state.category.questions_ids.length
}

const QuestionAtPositionIndex = (state, index) => {
  return (state.category.questions_ids[index] || null)
}

const QuestionsPage = props => {

  const [state, setState] = useState({
    currentQuestionIndex: null,
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
    FetchAndUpdateQuestion({
      identifier: QuestionAtPositionIndex(state, state.currentQuestionIndex)
    })
  }, [state.category])

  const FetchAndUpdateQuestion = (params) => {
    if (CategoryQuestionsCount(state) > 0) {
      FetchCategoryQuestion(params).then((response) => {
        setState({
          ...state,
          question: (response.data.question || INITIAL_QUESTION),
          currentQuestionIndex: (state.currentQuestionIndex + 1 || 0)
        })
      })
    }
  }

  return (
    <div className="flex gap-1">
      <div className="flex-auto w-11/12 rounded overflow-hidden shadow-lg">
        <div className="flex py-4 px-2 bg-gray-200">
          {/* Category Name */}
          <div className="flex-auto w-4/5">
            <p className="bold">[[TITLE]]</p>
          </div>
          {/* Remaining Questions Count */}
          <div className="flex-auto w-1/5">
            <p className="float-right">[[X questions to go]]</p>
          </div>
        </div>

        {/* Progress Bar */}
        <progress className="w-full bg-teal-300 h-2 mb-4 shadow-inner" value={2} max={5}></progress>

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

      <div className="flex-auto w-1/12">
        <div className="
          overflow-hidden shadow-lg p-4
          aspect-square flex flex-col
          items-center justify-center bg-red-400
          text-slate-200 rounded-sm
        ">
          <h4 className="text-4xl font-medium">00:00</h4>
          <span className="font-small text-sm">[[TIME IS UP]]</span>
        </div>
      </div>
    </div>

  )
}

export default QuestionsPage