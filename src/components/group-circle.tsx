import React, { Fragment } from "react";
import Circle from "./circle";

function GroupCircle() {
  return (
    <Fragment>
      <div className="flex gap-4">
        <Circle />
        <Circle color="white" />
        <Circle color="blue" />
        <Circle color="blue" />
        <Circle />
      </div>
      <div className="flex gap-4">
        <Circle color="blue" />
        <Circle color="blue" />
        <Circle />
        <Circle color="blue" />
        <Circle color="white" />
      </div>
      <div className="flex gap-4">
        <Circle color="white" />
        <Circle color="blue" />
        <Circle color="blue" />
        <Circle color="blue" />
        <Circle />
      </div>
      <div className="flex gap-4">
        <Circle color="blue" />
        <Circle />
        <Circle color="blue" />
        <Circle />
        <Circle color="white" />
      </div>
      <div className="flex gap-4">
        <Circle color="white" />
        <Circle color="blue" />
        <Circle />
        <Circle color="blue" />
        <Circle color="blue" />
      </div>
    </Fragment>
  );
}

export default GroupCircle;
