import React, { Fragment } from "react";

function Languages() {
  return (
    <Fragment>
      <div className="grid grid-cols-3">
        <p className="text-neutral-200 w-10 text-lg uppercase">English</p>
        <div className="flex col-span-2">
          <div className="border bg-primary w-[200px] h-5 rounded-s-full border-primary" />
          <div className="border bg-transparent w-[100px] h-5 rounded-e-full border-primary" />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <p className="text-neutral-200 text-lg uppercase">Japanese</p>
        <div className="flex col-span-2">
          <div className="border bg-primary w-[120px] h-5 rounded-s-full border-primary" />
          <div className="border bg-transparent w-[180px] h-5 rounded-e-full border-primary" />
        </div>
      </div>
    </Fragment>
  );
}

export default Languages;
