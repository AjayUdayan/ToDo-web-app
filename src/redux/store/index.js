import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initisalState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initisalState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;



// import { createStore, applyMiddleware, compose } from "redux";
// import createDebounce from "redux-debounced";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers/rootReducer";

// const middlewares = [thunk, createDebounce()];

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const store = createStore(
//   rootReducer,
//   {},
//   composeEnhancers(applyMiddleware(...middlewares))
// );
// console.log("store data", store);

// export { store };