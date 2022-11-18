import types from '../types';

const initial_state = {
  userData: {},
  token: '',
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.LoginType:
      const data = action.payload;
      return {
        userData: data.user,
        token: data.token,
      };
      break;
    case types.LogoutType:
      return {
        userData: {},
        token: '',
      };
      break;
    case types.UpdateProfile:
      const updatedData = action.payload;
      console.log(23, updatedData.user);
      return {...state, userData: updatedData.user};
      break;
    default:
      return {...state};
      break;
  }
}
