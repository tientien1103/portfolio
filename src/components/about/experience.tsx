import React, { Fragment } from "react";

function Experience() {
  return (
    <Fragment>
      <div className="flex gap-4">
        <p className="text-neutral-200">04/2023 - 10/2023</p>
        <div className="max-w-[400px]">
          <p className="text-neutral-200 text-lg font-bold">
            E9 digital COMPANY
          </p>
          <ul className="list-disc ml-4">
            <li className="text-neutral-200 text-sm">
              Support the construction and development of application software,
              new product, and company projects.
            </li>
            <li className="text-neutral-200 text-sm">
              Maintaince and fix product errors during operation.
            </li>
            <li className="text-neutral-200 text-sm">
              Complete other tasks as required by management.
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="flex gap-4">
        <p className="text-neutral-200">02/2023 - 08/2023</p>
        <div>
          <p className="text-neutral-200">FullStack Web Development</p>
          <div>
            <p className="text-primary text-sm">Coder School</p>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
}

export default Experience;
