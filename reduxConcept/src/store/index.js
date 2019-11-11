import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import gameReducer from "./Reducer/gameReducer";
import personReducer from "./Reducer/personReducer";
import userReducer from "./Reducer/userReducer";
import thunk from "redux-thunk";

const AllReducer = combineReducers({
  person: personReducer,
  game: gameReducer,
  users: userReducer
});

const initialSatate = {
  game: { name: "circket" },
  person: { name: "Amresh" },
  users: []
};

const middleware = [thunk];
const sotre = createStore(
  AllReducer,
  initialSatate,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default sotre;
