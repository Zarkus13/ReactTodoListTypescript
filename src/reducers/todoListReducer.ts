import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface State {
  list: string[],
  fetchingList: boolean
}

interface BoredActivity {
  activity: string,
  type: string,
  participants: number,
  price: number,
  link: string,
  key: string,
  accessibility: number
}

const initialState: State = {
  // list: JSON.parse(localStorage.getItem('todo-items') || '[]')
  list: [],
  fetchingList: false
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  (tasksQuantity: number) =>
    Promise.all(
      Array.from({ length: tasksQuantity })
        .map(() =>
          axios.get<BoredActivity>('https://www.boredapi.com/api/activity')
            .then((result) =>
              result.data.activity
            )
        )
    )
);

const addTodoItems = (state: State, action: PayloadAction<string[]>) =>
  ({
    ...state,
    list: action.payload,
    fetchingList: false
  });

const todoListReducer = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    addTodoItem: (state, action: PayloadAction<string>) => {
      const newTodoList = state.list.concat([ action.payload ]);

      localStorage.setItem('todo-items', JSON.stringify(newTodoList));

      return {
        ...state,
        list: newTodoList
      };
    },
    addTodoItems: addTodoItems
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, addTodoItems);

    builder.addCase(fetchTasks.pending, (state) =>
      ({
        ...state,
        fetchingList: true
      })
    );
  }
});

export const { addTodoItem } = todoListReducer.actions;

export default todoListReducer.reducer;