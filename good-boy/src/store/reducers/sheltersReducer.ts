import { Shelter } from "../../types/shelters";
import * as actions from "./../actionTypes";
import { Reducer, AnyAction } from "redux";

type SheltersAction = {
  type: string;
  payload: Shelter[];
};

export const sheltersReducer: Reducer<Shelter[], SheltersAction | AnyAction> = (
  state: Shelter[] = [],
  action: SheltersAction | AnyAction
): Shelter[] => {
  switch (action.type) {
    case actions.FETCH_SHELTERS:
      return action.payload;
    default:
      return state;
  }
};
