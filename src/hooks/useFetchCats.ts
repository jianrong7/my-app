import { useState, useEffect } from "react";
import axios from "axios";
import { CatInterface } from "../types/cat";

const baseUrl = "https://cat-fact.herokuapp.com/facts";

export default function useFetchCats() {
  const [cats, setCats] = useState<null | CatInterface[]>(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(baseUrl);
        setCats(data);
        return data;
      } catch {
        return null;
      }
    }

    getData();
  }, []);

  if (!cats) return null;

  return cats;
}
