// import * as api from "../../api";

import { wait } from "../../utils/helpers";
import { pathsData } from "../../__mocks__/paths";

export const getPaths = (s, f) => async (dispatch) => {
  try {
    // const { data } = await api.fetchUsers();
    await wait(2000);
    const data = pathsData;

    dispatch({ type: "FETCH_ALL_PATHS", payload: data });
    s();
  } catch (err) {
    f(err);
    console.log(err);
  }
};
export const createPath = (formData) => async (dispatch) => {
  try {
    // const { data } = await api.signUp(formData);
    // dispatch({ type: "CREATE_USER", payload: data.result.data });
  } catch (error) {
    console.log(error);
  }
};
export const updatePath = (userId, userData) => async (dispatch) => {
  try {
    // console.log(userId, userData);
    // const { data } = await api.updateUser(userId, userData);
    // console.log(data);
    // dispatch({ type: "UPDATE_USER", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deletePath = (userId) => async (dispatch) => {
  try {
    // console.log(userId);
    // await api.deleteUser(userId);
    // dispatch({ type: "DELETE_USER", payload: { userId } });
  } catch (err) {}
};
