import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { categoryApi, questionApi } from "../../api";
import {
  CategoryPanel,
  QuestionPanel,
  TimerPanel,
  ResultsPanel,
} from "../helper";
import ProgressBarField from "../form_fields/ProgressBarField";

import InitialState from "../../data/InitialState";

const ZERO = 0;

const INITIAL_CATEGORY = InitialState.category;
const INITIAL_QUESTION = InitialState.question;
const INITIAL_CONTROL_MANAGER = InitialState.controlManager;

const FetchCategory = (params) => {
  return categoryApi.getCategory(params);
};

const FetchCategoryQuestion = (params) => {
  return questionApi.getQuestion(params);
};

const CategoryQuestionsCount = (state) => {
  return state.category.question_ids?.length || ZERO;
};

const RemainingQuestionsCount = (state) => {
  return state.category.question_ids?.length - state.nextQuestionIndex;
};

const QuestionAtPositionIndex = (state, index) => {
  return state.category.question_ids[Number(index)];
};

const IsLastQuestionInCategory = (state) => {
  return state.nextQuestionIndex >= state.category.question_ids.length;
};

const QuestionsPage = () => {
  const { categoryID } = useParams();
  const [timerInterval, setTimerInterval] = useState(0);

  const [state, setState] = useState({
    nextQuestionIndex: ZERO,
    category: INITIAL_CATEGORY,
    question: INITIAL_QUESTION,
    controlsManager: INITIAL_CONTROL_MANAGER,
  });

  useEffect(() => {
    FetchCategory({ identifier: categoryID }).then((response) => {
      setState({
        ...state,
        category: response.data.category || INITIAL_CATEGORY,
      });
    });
  }, [categoryID]);

  useEffect(() => {
    if (CategoryQuestionsCount(state) > 0) {
      FetchAndUpdateQuestion();
    }
  }, [state.category.id]);

  const FetchAndUpdateQuestion = () => {
    const params = {
      identifier: QuestionAtPositionIndex(state, state.nextQuestionIndex),
    };
    FetchCategoryQuestion(params).then((response) => {
      setState({
        ...state,
        question: response.data.question || INITIAL_QUESTION,
        nextQuestionIndex: state.nextQuestionIndex + 1,
        controlsManager: {
          ...state.controlsManager,
          hasTimeElapsed: false,
        },
      });
    });
  };

  const stopTimerCounter = () => {
    setTimerInterval(clearTimeout(timerInterval));
  };

  const handleStopTimer = () => {
    stopTimerCounter();
    setState({
      ...state,
      controlsManager: {
        ...state.controlsManager,
        hasTimeElapsed: true,
      },
    });
  };

  const handleSubmitAnswer = (submittedAnswer) => {
    const submittedAnswersList = [
      ...state.controlsManager.submittedAnswers,
      submittedAnswer,
    ];
    stopTimerCounter();
    setState({
      ...state,
      controlsManager: {
        submittedAnswers: submittedAnswersList,
        hasTimeElapsed: true,
      },
    });
  };

  return (
    <div className="flex gap-1">
      <div className="flex-auto w-10/12 rounded overflow-hidden shadow-lg">
        <CategoryPanel
          title={state.category.title}
          remainingQuestionsCount={RemainingQuestionsCount(state)}
        />

        <ProgressBarField
          currentValue={state.nextQuestionIndex}
          maximumValue={CategoryQuestionsCount(state)}
        />

        <QuestionPanel
          question={state.question}
          controlsManager={state.controlsManager}
          isLastQuestion={IsLastQuestionInCategory(state)}
          handleSubmitAnswer={handleSubmitAnswer}
          loadNextQuestion={FetchAndUpdateQuestion}
        />
      </div>

      <div className="w-2/12 flex flex-col">
        <TimerPanel
          question={state.question}
          countdown={state.question.countdown_timer}
          stopTimer={handleStopTimer}
          setTimerInterval={setTimerInterval}
        />

        <span className="h-3/5"></span>

        <ResultsPanel
          results={state.controlsManager.submittedAnswers}
          totalQuestionsCount={CategoryQuestionsCount(state)}
        />
      </div>
    </div>
  );
};

export default QuestionsPage;
