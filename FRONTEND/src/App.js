import { Suspense, lazy } from "react";

import { Spinner } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import store from "./redux/store";
import { Provider } from "react-redux";

const HomePage = lazy(() => import("./pages/HomePage"));

const Fallback = () => {
  return (
    <>
      <Spinner
        animation="grow"
        role="status"
        variant="primary"
        className="text-center"
        style={{
          width: "60px",
          height: "60px",
          color: "#4C8BF5",
          position: "absolute",
          top: "50%",
          left: "calc(50% - 30px)",
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  );
};

if (localStorage.theme == "dark") {
  document.body.style.backgroundColor = "black";
}

if (localStorage.theme == "light") {
  document.body.style.backgroundColor = "white";
}

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Fallback />}>
          <HomePage />
        </Suspense>
      </Provider>
    </>
  );
};

export default App;
