import React from "react";
import Rnd from "react-rnd";

const RNDBox = ({ color, width, height, message, value }) => {
  return (
    <>
      <Rnd
        style={{ backgroundColor: "lightgrey" }}
        default={{
          x: 0,
          y: 0,
          width: width,
          height: height,
        }}
        minWidth={300}
        minHeight={200}
        maxWidth={450}
        maxHeight={300}
        bounds="parent"
      >
        <div
          className="box"
          style={{
            margin: 0,
            height: "100%",
            paddingBottom: "40px",
            border: "1px dashed #000",
          }}
        >
          <p style={{ margin: "1em" }}>{message}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "center ",
            }}
          >
            <span
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: color,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {value}
            </span>
          </div>
        </div>
      </Rnd>
    </>
  );
};
export default RNDBox;
