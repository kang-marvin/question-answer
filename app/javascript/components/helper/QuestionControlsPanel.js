
import React from "react"
import { Link } from "react-router-dom"

const COMMON_BUTTON_CLASS = `
  font-bold py-3 px-2 m-2
  border uppercase flex-auto
  w-4/12
`

const ACTION_BUTTON_CLASS = `
  rounded bg-sky-700 text-white
`

const NoSubmittedAnswerButton = () => {
  return (
    <button
      disabled
      className={`
        ${COMMON_BUTTON_CLASS}
        bg-red-100 text-red-500
        rounded-full
      `}
    >
      NO ANSWER SUBMITTED
    </button>
  )
}

const QuestionControlsPanel = props => {

  const {
    hasTimeElapsed,
    hasSubmittedAnswer,
    selectedAnswer,
    isLastQuestion,
    handleSubmitAnswer,
    loadNextQuestion
  } = props

  const handleSubmit = () => {
    handleSubmitAnswer(selectedAnswer)
  }

  return (
    <div className="flex px-2 m-4">
      <span className="flex-auto w-4/12"></span>
      {
        hasTimeElapsed &&
        selectedAnswer === null &&
        <NoSubmittedAnswerButton />
      }

      {
        hasTimeElapsed === false &&
        hasSubmittedAnswer === false &&
        <button
          disabled={selectedAnswer === null}
          className={`
            ${COMMON_BUTTON_CLASS}
            ${ACTION_BUTTON_CLASS}
          `}
          onClick={handleSubmit}
        >Submit</button>
      }

      {
        hasTimeElapsed &&
        isLastQuestion === false &&
        <button
          className={`
            ${COMMON_BUTTON_CLASS}
            ${ACTION_BUTTON_CLASS}
          `}
          onClick={loadNextQuestion}
        >Next Question</button>
      }

      {
        hasTimeElapsed &&
        hasSubmittedAnswer &&
        isLastQuestion &&
        <Link
          to="/categories"
          className={`
            ${COMMON_BUTTON_CLASS}
            text-black text-center
            border-blue-300 rounded-md
          `}
        >
          <button>Finished. View Others</button>
        </Link>
      }

    </div>
  )
}

export default QuestionControlsPanel