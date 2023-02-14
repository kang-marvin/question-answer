import React, { useState } from "react"

import QuestionControlsPanel from "./QuestionControlsPanel"

const QuestionPanel = props => {

  const {
    question,
    isLastQuestion,
    controlsManager,
    handleSubmitAnswer,
  } = props

  const [state, setState] = useState({
    selectedAnswer: null,
    submittedAnswer: null
  })

  const handleSelectedAnswer = selectedAnswer => {
    setState({...state, selectedAnswer: selectedAnswer })
  }

  const checkedSubmittedAnswerThenForward = (submittedAnswer) => {
    setState({...state, submittedAnswer: submittedAnswer })
    handleSubmitAnswer(submittedAnswer?.is_correct)
  }

  return (
    <div className="flex flex-col p-8">
      {/* Question content */}
      <h2 className="text-gray-900 text-xl mb-2">
        {question.content_body}
      </h2>

      {/* Answer Options */}
      <div className="flex flex-col gap-2">
        {question.answers.map((answer) => {
          return (
            <label
              className="border rounded-b px-4 py-3"
              key={answer.id}
              onClick={() => handleSelectedAnswer(answer)}
            >
              <p className="bg-grey-100">{answer.content_body}</p>
            </label>
          )
        })}
      </div>

      <QuestionControlsPanel
        hasTimeElapsed={controlsManager.hasTimeElapsed}
        selectedAnswer={state.selectedAnswer}
        isLastQuestion={isLastQuestion}
        handleSubmitAnswer={checkedSubmittedAnswerThenForward}
      />
    </div>
  )
}

export default QuestionPanel