import React, { useEffect, useState } from "react";

import { QuestionControlsPanel } from "./index";

const LabelColor = (answer, selectedAnswer, submittedAnswer) => {
  if (selectedAnswer === null) {
    return "hover:bg-gray-100";
  }

  if (submittedAnswer === null) {
    const result =
      answer.id === selectedAnswer.id
        ? "outline-2 outline outline-blue-300 bg-blue-100"
        : "hover:bg-gray-100";
    return result;
  } else if (answer.id === submittedAnswer.id) {
    const result =
      submittedAnswer.is_correct.toUpperCase() === "TRUE"
        ? "outline-2 outline outline-green-300 bg-green-100"
        : "outline-2 outline outline-red-300 bg-red-100";
    return result;
  } else if (answer.is_correct.toUpperCase() === "TRUE") {
    return "outline-2 outline outline-green-300 bg-green-100";
  }
};

const QuestionPanel = (props) => {
  const {
    question,
    isLastQuestion,
    controlsManager,
    loadNextQuestion,
    handleSubmitAnswer,
  } = props;

  const [state, setState] = useState({
    selectedAnswer: null,
    submittedAnswer: null,
  });

  useEffect(() => {
    setState({
      selectedAnswer: null,
      submittedAnswer: null,
    });
  }, [question]);

  const handleSelectedAnswer = (selectedAnswer) => {
    setState({ ...state, selectedAnswer: selectedAnswer });
  };

  const checkedSubmittedAnswerThenForward = (submittedAnswer) => {
    setState({ ...state, submittedAnswer: submittedAnswer });
    handleSubmitAnswer(submittedAnswer?.is_correct);
  };

  return (
    <div className="flex flex-col p-8">
      {/* Question content */}
      <h2 className="text-gray-900 text-xl mb-2">{question.content_body}</h2>

      {/* Answer Options */}
      <div className="flex flex-col gap-2">
        {question.answers.map((answer) => {
          return (
            <label
              className={`
                shadow border rounded-b px-4 py-3
                ${LabelColor(
                  answer,
                  state.selectedAnswer,
                  state.submittedAnswer
                )}
              `}
              key={answer.id}
              onClick={() => handleSelectedAnswer(answer)}
            >
              <p className="bg-grey-100">{answer.content_body}</p>
            </label>
          );
        })}
      </div>

      <QuestionControlsPanel
        hasTimeElapsed={controlsManager.hasTimeElapsed}
        selectedAnswer={state.selectedAnswer}
        hasSubmittedAnswer={state.submittedAnswer !== null}
        isLastQuestion={isLastQuestion}
        loadNextQuestion={loadNextQuestion}
        handleSubmitAnswer={checkedSubmittedAnswerThenForward}
      />
    </div>
  );
};

export default QuestionPanel;
