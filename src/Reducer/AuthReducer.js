import { USER_FIRST_NAME,
  USER_LAST_NAME,
  USER_EMAIL,
  USER_PASSWORD,
  USER_PASSWORD_CONFIRM,
  AUTH_TOKEN} from "../Constants/AuthConstants"

const AuthReducer = (state, action) => {
  switch (action.type) {
    case USER_FIRST_NAME:
      return {
        ...state,
        userInfo: { ...state.userInfo, firstName: action.payload },
      };
    case USER_LAST_NAME:
      return {
        ...state,
        userInfo: { ...state.userInfo, lastName: action.payload },
      };
    case USER_EMAIL:
      return {
        ...state,
        userInfo: { ...state.userInfo, email: action.payload },
      };
    case USER_PASSWORD:
      return {
        ...state,
        userInfo: { ...state.userInfo, password: action.payload },
      };
    case USER_PASSWORD_CONFIRM:
      return {
        ...state,
        userInfo: { ...state.userInfo, confirmPassword: action.payload },
      };
    case AUTH_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
export { AuthReducer }