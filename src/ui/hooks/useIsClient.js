import { useEffect, useState } from "react";
import { isBrowser } from "../../utils/isBrowser";

export const useIsClient = () => {
  const [isClient, setIsClient] = useState();

  useEffect(() => {
    if (isBrowser() || !import.meta.env.SSR) {
      setIsClient(true);
    } else {
      setIsClient(false);
    }
  }, []);

  return { isClient };
};
