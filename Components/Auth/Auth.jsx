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

const uiSlice = createSlice({
  name: "Toggle",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

const refreshingData = () => {
  try {
    const linewisedata = localStorage.getItem("cart");
    if (linewisedata === null) {
      return [];
    }
    return JSON.parse(linewisedata);
  } catch (err) {
    return [];
  }
};

const savedata = (state) => {
  try {
    const storingdata = JSON.stringify(state);
    localStorage.setItem("cart", storingdata);
  } catch (err) {
    console.error(err);
  }
};

const cartSlice = createSlice({
  name: "AddToCart",
  initialState: {
    cartitems: refreshingData(),
  },
  reducers: {
    Addcart(state, action) {
      state.cartitems = action.payload;
      savedata(state.cartitems);
    },
    removecart(state, action) {
      state.cartitems = state.cartitems.filter(
        (expense) => expense.id !== action.payload
      );
      savedata(state.cartitems);
    },
  },
});

export const { setExpenses, addExpense, removeExpense, editingExpense } =
  expensesSlice.actions;

export const { toggle } = uiSlice.actions;
export const { changetheme } = themeSlice.actions;

export const { Addcart, removecart } = cartSlice.actions;
export default cartSlice.reducer;
export const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
    theme: themeSlice.reducer,
    portal: uiSlice.reducer,
    Addingcart: cartSlice.reducer,
  },
});
