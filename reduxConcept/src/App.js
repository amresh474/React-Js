import React from "react";
import "./App.css";
import store from "./store/index";
import update_Person from "./store/actions/personActions";
import update_Game from "./store/actions/gameActions";
import update_User from './store/actions/userAction'
import { connect } from "react-redux";

const mapstateProps = state => {
  return {
    person: state.person,
    game: state.game,
    users:[]
  };
};
const mapDispatch = dispatch => {
  return {
    updateGame: () => {
      dispatch(update_Game);
    },
    updatePerson: () => {
      dispatch(update_Person);
    },
    fetchUser:()=>{
      dispatch(update_User);
    }
  };
};
function App(props) {
  console.log(props);

  return (
    <div className="App">
      <h1>Redux Tituorial</h1>
      Person Name : {store.getState().person.name}
      <button onClick={props.updatePerson}> UpdatePerson Name</button>
      <br />
      Game Name : {store.getState().game.name}
      <button onClick={props.updateGame}>UpdateGame Name</button>
      <br />
      Users : <button onClick={props.fetchUser}>Fecth user Details</button>
       {
         props.users.length === 0 ?<p>No user found</p>:
         props.users.map(users => <p>{users.id}</p>)
       }
    </div>
  );
}

export default connect(
  mapstateProps,
  mapDispatch
)(App);
