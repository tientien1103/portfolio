import React, { Fragment } from "react";

function Projects() {
  return (
    <Fragment>
      <div className="flex gap-4">
        <p className="text-neutral-200">04/2023 - 05/2023</p>
        <div>
          <p className="text-neutral-200 uppercase">Tnetflix</p>
          <p className="text-neutral-200">A movie website</p>
          <div>
            <div className="flex">
              <p className="text-primary text-sm">ReactJS</p>
              <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
              <p className="text-primary text-sm">Material UI</p>
              <hr className="mx-2 h-4 self-center border-s-[1px] border-primary" />
              <p className="text-primary text-sm">Axios</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <p className="text-neutral-200">07/2023 - 08/2023</p>
        <div>
          <p className="text-neutral-200 uppercase">Tmuzik</p>
          <p className="text-neutral-200">A music website</p>
          <div>
            <div className="flex">
              <p className="text-primary text-sm">Yup</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
              <p className="text-primary text-sm">ReactJS</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
              <p className="text-primary text-sm">Material UI</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
              <p className="text-primary text-sm">Redux-Toolkit</p>
            </div>
            <div className="flex">
              <p className="text-primary text-sm">Tailwind Css</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />

              <p className="text-primary text-sm">NodeJS</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
              <p className="text-primary text-sm">MongoDB</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <p className="text-neutral-200">08/2023 - 09/2023</p>
        <div>
          <p className="text-neutral-200 uppercase">PAG</p>
          <p className="text-neutral-200">A landing page</p>
          <div>
            <div className="flex">
              <p className="text-primary text-sm">NextJs</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
              <p className="text-primary text-sm">Contentful</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
              <p className="text-primary text-sm">Tailwind Css</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
              <p className="text-primary text-sm">Graphql</p>
            </div>
            <div className="flex">
              <p className="text-primary text-sm">React Hook Form</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
              <p className="text-primary text-sm">Yup</p>
              <hr className="mx-2 h-4 border-s-[1px] border-primary" />
              <p className="text-primary text-sm">Google recaptcha</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Projects;
