import { User, UserAction, UserState } from "../../types/user";

const defaultState: UserState = {
  data: {} as User,
  loading: false,
  error: '',
}

const userReducer = (state: UserState = defaultState, action: UserAction) => {
  // switch () {
  //   case value:

  //     break;

  //   default:
  //     break;
  // }
  return state;
}

export default userReducer;