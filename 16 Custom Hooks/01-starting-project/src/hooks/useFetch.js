import { useEffect, useState } from 'react';

export function useFetch(fetchFunc, initData) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchData, setFetchData] = useState(initData);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFunc();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunc]);

  return {
    isFetching,
    error,
    fetchData,
    setFetchData,
  };
}
