import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../constants/BASE_URL";

const useRequestData = (path, trigger) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token-integrador");
    if (!token) {
      window.location.href = "/";
    }

    axios
      .get(`${BASE_URL}${path}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, [path, trigger]);

  return [data, isLoading, isError];
};
export default useRequestData;
