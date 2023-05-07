import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Shelter } from "../types/shelters";
import { fetchShelters } from "../store/actions/sheltersActions";

const API_URL =
  "https://frontend-assignment-api.goodrequest.dev/api/v1/shelters";

export const useFetchShelters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSheltersData = async () => {
      try {
        const response = await axios.get<Shelter[]>(API_URL);
        dispatch(fetchShelters(response.data));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSheltersData();
  }, [dispatch]);
};
