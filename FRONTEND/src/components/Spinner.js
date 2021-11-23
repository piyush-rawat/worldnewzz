import React from "react";

import { Spinner } from "react-bootstrap";

import { useSelector } from "react-redux";

const Spinnerr = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <div>
        <Spinner
          animation="border"
          role="status"
          style={{
            width: "60px",
            height: "60px",
            color: theme == "light" ? "#4C8BF5" : "white",
            position: "absolute",
            top: "50%",
            left: "calc(50% - 30px)",
          }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default Spinnerr;
