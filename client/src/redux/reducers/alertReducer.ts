import { IAlert } from "../../utils/TypeScript";
import { ALERT, AlertType } from "../types/alertType";

const alertReducer = (state: IAlert = {}, action: AlertType): IAlert => {
  switch (action.type) {
    case ALERT:
      return action.payload;
    default:
      return state;
  }
};

export default alertReducer;
