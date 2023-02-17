const InitialState = {
  category: {
    id: null,
    title: null,
    question_ids: [],
  },

  question: {
    id: null,
    content_body: null,
    countdown_timer: null,
    answers: [],
  },

  controlManager: {
    hasTimeElapsed: false,
    submittedAnswers: [],
  },

  pagination: {
    currentPage: 1,
    nextPage: null,
    previousPage: null,
    totalPages: 1,
    totalEntries: 0,
  },
};

export default InitialState;
