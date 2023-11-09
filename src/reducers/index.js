import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form";
const signup = (state = { status: "idle", message: null }, action) => {
  if (action.type === "Signup") {
    return { ...action.payload, status: "success" };
  } else if (action.type === "SignUpLoading") {
    return { status: "pending" };
  }
  return state;
};
const Login = (state = { status: "idle", message: null }, action) => {
  if (action.type === "login") {
    return {
      message: action.payload?.message ? action.payload.message : "success",
      status: "success",
      token: action.payload.token,
    };
  }
  if (action.type === "LoginLoading") {
    return { message: "", status: "pending" };
  }
  if (action.type === "default") {
    return { status: "idle", message: null };
  }
  if (action.type === "Logout") {
    window.location.reload();
    return action.payload;
  }
  return state;
};
const categories = (state = [], action) => {
  if (action.type === "all") {
    return action.payload;
  }
  if (action.type === "SEARCHING") {
    return action.payload.sort();
  }

  return state;
};
const menu = (state = [], action) => {
  if (action.type === "MENU") {
    return action.payload;
  }
  if (action.type === "DELETE_DISH") {
    const arr = state.filter((m) => m.id !== action.payload);
    return arr;
  }

  if (action.type === "SEARCHING") {
    return action.payload;
  }

  return state;
};
const view = (state = [], action) => {
  if (action.type === "VIEW") {
    return action.payload;
  }
  if (action.type === "EDIT_EXTRA") {
    return action.payload;
  }
  return state;
};
const allcategories = (state = [], action) => {
  if (action.type === "ALL_CAT") {
    return action.payload;
  }
  return state;
};
const extracat = (state = [], action) => {
  if (action.type === "EXTRACAT") {
    return action.payload;
  }
  return state;
};
const allextras = (state = [], action) => {
  if (action.type === "FETCHEXTRAS") {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  SignUp: signup,
  login: Login,
  categories: categories,
  menu: menu,
  allcategories: allcategories,
  view: view,
  extracat: extracat,
  allextras: allextras,
  form: formReducer,
});
