import * as actions from "./../actionTypes";
import { Shelter } from "../../types/shelters";

export const fetchShelters = (shelters: Shelter[]) => ({
  type: actions.FETCH_SHELTERS,
  payload: shelters,
});
