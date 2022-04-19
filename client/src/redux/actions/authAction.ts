import { Dispatch } from "react";
import { api } from "../../api";
import {
  setStoredAuthToken,
  getStoredAuthToken,
  removeStoredAuthToken,
} from "../../shared/authToken";
import { IUserLogin } from "../../utils/TypeScript";
import { ALERT, AlertType } from "../types/alertType";
import { AuthType, AuthTypeEnum } from "../types/authTypes";

const STATUS_API = {
  success: 200,
};

export const login =
  (userData: IUserLogin, history: any) =>
  async (dispatch: Dispatch<AuthType | AlertType>) => {
    try {
      dispatch({ type: AuthTypeEnum.LOADING, payload: true });

      const res = await api.post("login", userData);
      console.log(res);
      if (res.status === STATUS_API.success) {
        dispatch({
          type: AuthTypeEnum.AUTH,
          payload: {
            user: res.data.user,
            token: res.data.access_token,
          },
        });

        setStoredAuthToken(res.data.access_token);
        history("/profile");
      }

      dispatch({ type: AuthTypeEnum.LOADING, payload: false });
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
    }
  };

export const refreshToken =
  () => async (dispatch: Dispatch<AuthType | AlertType>) => {
    if (getStoredAuthToken()) {
      try {
        dispatch({ type: ALERT, payload: { loading: true } });

        const res = await api.post("refresh_token");
        console.log(res);
        if (res.status === STATUS_API.success) {
          dispatch({
            type: AuthTypeEnum.AUTH,
            payload: {
              user: res.data.user,
              token: res.data.access_token,
            },
          });
        }
        dispatch({ type: ALERT, payload: { loading: false } });
      } catch (err: any) {
        dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
      }
    }
  };

export const logout =
  () => async (dispatch: Dispatch<AuthType | AlertType>) => {
    try {
      await api.post("logout");
      window.location.href = "/";
      removeStoredAuthToken();
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
    }
  };
