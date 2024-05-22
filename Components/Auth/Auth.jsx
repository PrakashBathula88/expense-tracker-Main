import { createSlice, configureStore } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    setExpenses(state, action) {
      return action.payload;
    },
    addExpense(state, action) {
      state.push(action.payload);
    },
    removeExpense(state, action) {
      return state.filter((expense) => expense.id !== action.payload);
    },
    editingExpense(state, action) {
      const { id, updatedData } = action.payload;
      const index = state.findIndex((expense) => expense.id === id);

      if (index !== -1) {
        state[index] = { ...state[index], ...updatedData };
      }
    },
  },
});
const inital = {
  darkmode: false,
};
const themeSlice = createSlice({
  name: "ToggleTheme",
  initialState: inital,
  reducers: {
    changetheme(state) {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { setExpenses, addExpense, removeExpense, editingExpense } =
  expensesSlice.actions;

export const { changetheme } = themeSlice.actions;
export const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
    theme: themeSlice.reducer,
  },
});
