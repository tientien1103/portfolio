import Education from "@/components/about/education";
import Experience from "@/components/about/experience";
import Expertise from "@/components/about/expertise";
import Interests from "@/components/about/interests";
import Languages from "@/components/about/languages";
import Projects from "@/components/about/projects";
import Skills from "@/components/about/skills";
import Container from "@/components/container";
import React from "react";

function AboutPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <section className="pt-20" id="about">
        <Container>
          <div className="grid grid-cols-2 w-full">
            <div>
              <div>
                <h3 className="text-white font-extrabold text-3xl uppercase">
                  Personal projects
                </h3>
                <div className="space-y-3 mt-5">
                  <Projects />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-white font-extrabold text-3xl uppercase">
                  Education
                </h3>
                <div className="space-y-5 mt-5">
                  <Education />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-white font-extrabold text-3xl uppercase mb-5">
                  Expertise
                </h3>
                <div className="flex max-w-1/2 flex-col">
                  <Expertise />
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-white font-extrabold text-3xl uppercase mb-5">
                  Skills
                </h3>
                <div className="flex max-w-1/2 flex-col">
                  <Skills />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-white font-extrabold text-3xl uppercase mb-5">
                  Experience
                </h3>
                <div className="flex max-w-1/2 flex-col">
                  <Experience />
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-white font-extrabold text-3xl uppercase mb-5">
                  Languages
                </h3>
                <div className="flex max-w-1/2 flex-col gap-8">
                  <Languages />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-white font-extrabold text-3xl uppercase mb-5">
                  Interests
                </h3>
                <div className="flex max-w-1/2 flex-col">
                  <Interests />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default AboutPage;
