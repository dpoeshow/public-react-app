import { legacy_createStore as createStore, compose } from "redux";
import rootReducer from "./index";
import AsyncStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  // Root
  key: "sunfox",
  // Storage Method (React Native)
  storage: AsyncStorage,

  // Whitelist (Save Specific Reducers)
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: [
  //     "auth"
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const window = globalThis.window ?? {};
// Middleware: Redux Persist Persisted Reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // options like actionSanitizer, stateSanitizer
    })
  : compose;

// const store = createStore(
//   persistedReducer,
//   // composeEnhancers(
//   //   applyMiddleware(thunk, logger)
//   //   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   // )
//   applyMiddleware(thunk)
// );

const store = createStore(rootReducer);

let persistor = persistStore(store);
// Exports
export { store, persistor, rootReducer };
