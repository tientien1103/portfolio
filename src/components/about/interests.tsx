import React, { Fragment } from "react";

function Interests() {
  return (
    <Fragment>
      <div className="flex">
        <p className="text-primary text-lg uppercase">Coding</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">Playing game</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">Traveling</p>
      </div>
      <div className="flex">
        <p className="text-primary text-lg uppercase">Listening to music</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />

        <p className="text-primary text-lg uppercase">Reading book</p>
      </div>
    </Fragment>
  );
}

export default Interests;
