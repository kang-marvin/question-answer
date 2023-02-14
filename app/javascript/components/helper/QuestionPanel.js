
import React, { useId } from "react"

const QuestionPanel = props => {

  const { question, children } = props

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
            <label className="border rounded-b px-4 py-3" key={useId}>
              <p className="bg-grey-100">{answer.content_body}</p>
            </label>
          )
        })}
      </div>

      {children}
    </div>
  )
}

export default QuestionPanel