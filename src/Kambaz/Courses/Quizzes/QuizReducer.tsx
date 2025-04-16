import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  quizzes: [],
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
        state.quizzes = action.payload;
    },

    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: uuidv4(),
        description: quiz.description,
        title: quiz.title,
        course: quiz.course,
        dueDate: quiz.dueDate,
        points: quiz.points,
        availableFrom: quiz.availableFrom,
        availableUntil: quiz.availableUntil,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: QuizId }) => {
      state.quizzes = state.quizzes.filter(
        (a: any) => a._id !== QuizId);
    },
    updateQuiz: (state, { payload: Quiz }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === Quiz._id ? Quiz : a
      ) as any;
    },
    editQuiz: (state, { payload: QuizId }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === QuizId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;