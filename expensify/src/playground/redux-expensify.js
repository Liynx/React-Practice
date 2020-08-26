import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

// ADD_EXPENSE
const addExpense = (
  { 
    description = '', 
    note = '', 
    ammount = 0, 
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    ammount,
    createdAt
  }
})
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});


const expenseOne = store.dispatch(addExpense({ description: 'Rent', ammount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', ammount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }))



const demoState = {
  expenses: [{
    id: 'pasdf',
    description: 'January Rent',
    note: 'This was the final payment',
    ammount: 140000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'ammount', //date or ammount
    startDate: undefined,
    endDate: undefined
  }
}