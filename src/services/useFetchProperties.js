//En este componente se simula un fetch a una API, en vez de una URL, se le pasa un json alojado localmente desde el componente Properties.jsx

import { useEffect, useState } from "react";

export function useFetchProperties(data) {

  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Asignar los datos JSON al estado
        setProperties(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [data]);

  return { properties, loading, error };
}
