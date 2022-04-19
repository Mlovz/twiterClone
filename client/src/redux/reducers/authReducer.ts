import { AuthType, AuthTypeEnum, IAuth } from "../types/authTypes";

// const initialState = {
//   loading: false,
//   user: [],
//   token: "",
// };

const authReducer = (state: IAuth = {}, action: AuthType): IAuth => {
  switch (action.type) {
    case AuthTypeEnum.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case AuthTypeEnum.AUTH:
      return action.payload;
    default:
      return state;
  }
};
export default authReducer;
