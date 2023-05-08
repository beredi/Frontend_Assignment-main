import { useState } from "react";
import axios from "axios";
import { API_URL } from "../types/api";

interface SubmitFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  value: number;
  shelterID: number;
}

type ResponseType = "SUCCESS" | "ERROR";

interface SubmitFormResponse {
  messages: [
    {
      type: ResponseType;
      message: string;
    }
  ];
}

export const useSubmitForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const submitForm = async (data: SubmitFormData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post<SubmitFormResponse>(
        `${API_URL}/contribute`,
        data
      );
      setSuccess(response.data.messages[0].type === "SUCCESS");
    } catch (error) {
      setError(
        "There was an error submitting the form. Please try again later."
      );
    }

    setIsLoading(false);
  };

  return { isLoading, error, success, submitForm };
};
