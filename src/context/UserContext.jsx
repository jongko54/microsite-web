import { createContext } from "react";

const UserContext = createContext({
  loginUser: {
    username: '',
    email: '',
  },
  login: false,
  setLoginUser: () => {},
  setLogin: () => {}
});

export default UserContext;
