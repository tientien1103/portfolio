import React, { Fragment } from "react";

function Expertise() {
  return (
    <Fragment>
      <div className="flex">
        <p className="text-primary text-lg uppercase">ReactJS</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">NextJS</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">Html</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">Css</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">Tailwind</p>
      </div>
      <div className="flex">
        <p className="text-primary text-lg uppercase">JavaScript</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />

        <p className="text-primary text-lg uppercase">TypeScript</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">Web development</p>
      </div>
      <div className="flex">
        <p className="text-primary text-lg uppercase">Contentful</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">NodeJs</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">MongoDB</p>
        <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
        <p className="text-primary text-lg uppercase">Graphql</p>
      </div>
    </Fragment>
  );
}

export default Expertise;
