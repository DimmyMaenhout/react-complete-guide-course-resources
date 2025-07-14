import { useEffect, useState } from "react";

// with custom hooks we can reduce duplicated code

export function useFetch(fetchFunction, initialValue) {
  // it's a convention/rule that functions that start with "use" are treated as hooks
  // react project typically look for functions that start with "use" and enforce certain rules on such functions

  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFunction();

        console.log("useFetch (custom hook)");
        console.log(data);
        
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunction]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
