import React, { Fragment } from "react";

function Expertise() {
  return (
    <Fragment>
      <div className="flex">
        <p className="text-primary text-sm uppercase">FrontEnd development</p>
        <hr className="mx-2 h-4 border-s-[1px] border-primary" />
        <p className="text-primary text-sm uppercase">NextJS</p>
        <hr className="mx-2 h-4 border-s-[1px] border-primary" />
        <p className="text-primary text-sm uppercase">Html</p>
        <hr className="mx-2 h-4 border-s-[1px] border-primary" />
        <p className="text-primary text-sm uppercase">Css</p>
      </div>
      <div className="flex">
        <p className="text-primary text-sm uppercase">JavaScript</p>
        <hr className="mx-2 h-4 border-s-[1px] border-primary" />

        <p className="text-primary text-sm uppercase">TypeScript</p>
        <hr className="mx-2 h-4 border-s-[1px] border-primary" />
        <p className="text-primary text-sm uppercase">Web development</p>
      </div>
      <div className="flex">
        <p className="text-primary text-sm uppercase">ReactJS</p>
        <hr className="mx-2 h-4 border-s-[1px] border-primary" />
        <p className="text-primary text-sm uppercase">NodeJs</p>
        <hr className="mx-2 h-4 border-s-[1px] border-primary" />
        <p className="text-primary text-sm uppercase">MongoDB</p>
      </div>
    </Fragment>
  );
}

export default Expertise;
