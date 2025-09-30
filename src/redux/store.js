//import { createStore } from "redux";
//import rootReducer from "./reducer";
//import { composeWithDevTools } from "@redux-devtools/extension";

//const composeEnhancers = composeWithDevTools();

//const store = createStore(rootReducer, composeEnhancers);

//export default store;

//Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "../components/Filters/FiltersSlice";
import todosSlice from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: FiltersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;
