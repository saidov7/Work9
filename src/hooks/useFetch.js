import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(json => setData(json))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
