import React, { Fragment } from "react";

function Skills() {
  return (
    <Fragment>
      <div className="flex">
        <p className="text-primary text-lg uppercase">Flexibility</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">Creativity</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">Attention to details</p>
      </div>
      <div className="flex">
        <p className="text-primary text-lg uppercase">
          Team player communication
        </p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />

        <p className="text-primary text-lg uppercase">Time management</p>
      </div>
    </Fragment>
  );
}

export default Skills;
