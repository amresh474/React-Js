export const UPDATE_USER = "UPDATE_USER";

const update_User = dispatch => {
  //localhost:8080/user

  fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(res => dispatch({ type: UPDATE_USER, payload: res.data }))
    .catch(console.log);
};

export default update_User;
