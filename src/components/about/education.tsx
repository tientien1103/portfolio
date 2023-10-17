import React, { Fragment } from "react";

function Education() {
  return (
    <Fragment>
      <div className="flex gap-4">
        <p className="text-neutral-200">09/2017 - 03/2022</p>
        <div>
          <p className="text-neutral-200">English</p>
          <div>
            <p className="text-primary text-sm">HUTECH university</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <p className="text-neutral-200">02/2023 - 08/2023</p>
        <div>
          <p className="text-neutral-200">FullStack Web Development</p>
          <div>
            <p className="text-primary text-sm">Coder School</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Education;
