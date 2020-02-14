import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [url]);
  //   console.log(data);
  return [data];
}
