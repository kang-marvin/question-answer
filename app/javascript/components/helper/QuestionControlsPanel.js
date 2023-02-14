
import React from "react"

const NoSubmittedAnswerButton = () => {
  return (
    <button
      disabled
      className="
        flex-auto w-4/12 bg-red-100 text-red-500
        font-bold py-3 px-4 m-2 border rounded-full
      "
    >
      [[NO ANSWER SUBMITTED]]
    </button>
  )
}

const QuestionControlsPanel = props => {

  const {
    hasTimeElapsed = false,
    hasSelectedAnAnswer = false,
    hasSubmittedAnswer = true,
    isLastQuestion = false,
    handleSubmit
  } = props

  return (
    <div className="flex px-2 m-4">
      <span className="flex-auto w-8/12"></span>
      {
        hasSubmittedAnswer === false &&
        hasTimeElapsed === true &&
        <NoSubmittedAnswerButton />
      }

      {
        hasTimeElapsed === false &&
        <button
          disabled={hasSelectedAnAnswer === false}
          className="
            flex-auto w-4/12 bg-sky-700
          text-white font-bold py-3
            px-4 m-2 border rounded
            uppercase
          "
          onClick={handleSubmit}
        >Submit</button>
      }

      {
        hasTimeElapsed === true &&
        isLastQuestion === false &&
        <button
          className="
            flex-auto w-4/12 bg-sky-700
          text-white font-bold py-3
            px-4 m-2 border rounded
            uppercase
          "
          onClick={loadNextQuestion}
        >Next Question</button>
      }

      {
        hasTimeElapsed === true &&
        isLastQuestion === true &&
        <button
          className="
            flex-auto w-4/12 bg-sky-700
          text-white font-bold py-3
            px-4 m-2 border rounded
            uppercase
          "
          onClick={viewResults}
        >View Results</button>
      }

    </div>
  )
}

export default QuestionControlsPanel