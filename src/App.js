import React from "react";
import "./style.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import Routers from "./routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routers />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
