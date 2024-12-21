// hooks/useCurrencyInfo.js
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/66c607803e14ab3dd7b5d822/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;