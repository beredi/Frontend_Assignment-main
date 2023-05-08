import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Shelter } from "../types/shelters";
import { fetchShelters } from "../store/actions/sheltersActions";
import { API_URL } from "../types/api";

type GetResponse = {
  shelters: Shelter[];
};

export const useFetchShelters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSheltersData = async () => {
      try {
        const response = await axios.get<GetResponse>(API_URL);
        dispatch(fetchShelters(response.data.shelters));
      } catch (error) {
        console.log(error);
      }
    };
    fetchSheltersData();
  }, [dispatch]);
};
