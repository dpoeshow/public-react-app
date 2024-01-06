import { useEffect, useState } from "react";
import envStrings from "../../assets/strings/env";

export const useGa = () => {
  const [ga, setGa] = useState();
  useEffect(() => {
    if (import.meta.env.SSR) {
      return;
    }
    const load = async () => {
      let _ga;
      if (!window.ReactGA) {
        _ga = (await import("react-ga4")).default;
        _ga.initialize(envStrings.google_analytics_id);
        window.ReactGA = _ga;
      }
      window.ReactGA.initialize(envStrings.google_analytics_id);
      setGa(window.ReactGA);
    };
    load();
  }, []);
  return { ga };
};
