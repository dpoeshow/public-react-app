import { isBrowser } from "../../utils/isBrowser";

export const persist = (reducer, persistentKey) => {
  if (!isBrowser()) {
    return;
  }

  const execustionResult = (...args) => {
    const result = reducer(...args);
    const stringifiedObject = JSON.stringify(result);
    window.localStorage.setItem(persistentKey, stringifiedObject);

    return result;
  };

  return execustionResult;
};
