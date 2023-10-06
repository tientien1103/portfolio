import Education from "@/components/about/education";
import Container from "@/components/container";
import React from "react";
import Expertise from "@/components/about/expertise";
import Experience from "@/components/about/experience";

function AboutpPage() {
  return (
    <main className="min-h-screen bg-[#FFF3DA]">
      <section className="pt-10">
        <Container>
          <div className="flex gap-8">
            <div className="w">
              <div>
                <h3 className="text-second font-extrabold text-2xl uppercase">
                  Experience
                </h3>
                <div className="space-y-3 mt-5">
                  <Experience />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-second font-extrabold text-2xl uppercase">
                  Education
                </h3>
                <div className="space-y-5 mt-5">
                  <Education />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-second font-extrabold text-2xl uppercase mb-5">
                  Expertise
                </h3>
                <div className="flex max-w-1/2 flex-col">
                  <Expertise />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default AboutpPage;
