const initialState = {
    user: null, 
};
  
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }; // Set the user object when logging in
    case 'LOGOUT':
      return { ...state, user: null }; // Clear the user object when logging out
    default:
      return state;
  }
};
  
export {userReducer};
  