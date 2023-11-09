import history from "../Components/history";
import restaurantApi from "../Components/restaurantApi";
export const signup = (formvalues) => async (dispatch) => {
  dispatch({ type: "SignUpLoading" });
  const response = await restaurantApi.post("/signup", {
    email: formvalues.email,
    password: formvalues.password,
    confirmpassword: formvalues.confirmpassword,
  });

  if (response.data.message) {
    dispatch({ type: "Signup", payload: response.data });
  } else {
    dispatch({ type: "Signup", payload: response });
    history.push("/");
  }
};
export const LogIn =
  (formvalues = null) =>
  async (dispatch) => {
    if (!formvalues) {
      return dispatch({ type: "default" });
    } else {
      dispatch({ type: "LoginLoading" });
      const response = await restaurantApi.post("/", {
        email: formvalues.email,
        password: formvalues.password,
      });

      if (response.data.credentials) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.id);
      }
      dispatch({
        type: "login",
        payload: response.data,
        token: response.data.token,
      });
      history.push("/main");
      window.location.reload();
    }
  };
export const LogOut = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  dispatch({ type: "Logout", payload: [] });
  history.push("/");
};
export const fetchallcat = () => async (dispatch) => {
  const response = await restaurantApi.get("/categories", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  dispatch({ type: "all", payload: response.data.categories[0] });
};
export const feeddishes = (formValues) => async (dispatch) => {
  const response = await restaurantApi.post("/save-dishes", {
    title: formValues.title,
    price: formValues.price,
    url: formValues.url,
    recepie: formValues.recepie,
    category: formValues.category,
  });

  dispatch({ type: "Dish_Saved", payload: response.data });
  history.push("/main");
};
export const fetchmenu = () => async (dispatch) => {
  const response = await restaurantApi.get("/menu");

  dispatch({ type: "MENU", payload: response.data.items });
};
export const viewone = (id) => async (dispatch) => {
  const response = await restaurantApi.get(`/view/${id}`);
  dispatch({ type: "VIEW", payload: response.data.items });
};
export const edit = (id, formValues) => async (dispatch) => {
  const response = await restaurantApi.put(`/edit-dish/${id}`, {
    title: formValues.title,
    price: formValues.price,
    url: formValues.url,
    recepie: formValues.recepie,
    category: formValues.category,
  });
  dispatch({ type: "EDIT", payload: response.data.items });
  history.push("/main");
};
export const delete2 = (id) => async (dispatch) => {
  await restaurantApi.delete(`/delete/${id}`);
  dispatch({ type: "DELETE_DISH", payload: id });
};
export const allcategories = () => async (dispatch) => {
  const response = await restaurantApi.get("/allcategories");
  dispatch({ type: "ALL_CAT", payload: response.data.items });
};
export const search = (term) => async (dispatch) => {
  const response = await restaurantApi.get(`/search/${term}`);

  dispatch({ type: "SEARCHING", payload: response.data.items });
};
export const extras = (values, id) => async (dispatch) => {
  await restaurantApi.post(`/extras/${id}`, {
    title: values.title,
    category: values.category,
    price: values.price,
  });
  history.push("/main");
};
export const extracat = (id) => async (dispatch) => {
  const response = await restaurantApi.get(`/extracat/${id}`);
  dispatch({ type: "EXTRACAT", payload: response.data.items });
};
export const fetchextras = (id) => async (dispatch) => {
  const response = await restaurantApi.get(`/extra/${id}`);
  dispatch({ type: "FETCHEXTRAS", payload: response.data.items });
};
export const deleteextra = (id) => async (dispatch) => {
  const response = await restaurantApi.delete(`/deletecat/${id}`);

  history.push(`/main`);
};
export const viewcat = (id) => async (dispatch) => {
  const response = await restaurantApi.get(`/viewcat/${id}`);
  dispatch({ type: "EDIT_EXTRA", payload: response.data.items });
};
export const editcat = (values, id) => async (dispatch) => {
  const response = await restaurantApi.put(`/edit-cat/${id}`, {
    title: values.title,
    price: values.price,
    category: values.category,
  });
  history.push("/main");
};

export const disable = (id) => async (dispatch) => {
  const response = await restaurantApi.post(`/disable/${id}`);
};
export const enable = (id) => async (dispatch) => {
  const response = await restaurantApi.post(`/enable/${id}`);
};
