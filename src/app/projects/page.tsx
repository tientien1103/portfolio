import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 relative">
        <Container className="max-w-6xl">
          <div className="flex w-full">
            <div className="p-4 border-neutral-100 rounded-xl bg-neutral-100">
              <Image
                src="/png/tnetflix.png"
                width={400}
                height={450}
                alt=""
                className="rounded-xl object-cover h-[400px]"
                loading="eager"
              />
              <div className="flex justify-between pt-4">
                <Link
                  href="#"
                  className="text-primary hover:text-[#E63E6D] text-2xl font-bold"
                >
                  Tnetflix
                </Link>
                <div className="flex gap-2">
                  <p className="text-3xl">💭</p>
                  <p className="text-primary text-3xl">💟</p>
                </div>
              </div>
            </div>
            <div className="p-4 absolute top-44 left-[530px] pt-14 border-neutral-100 rounded-xl bg-neutral-100">
              <Image
                src="/png/tmuzik.png"
                width={400}
                height={450}
                alt=""
                className="rounded-xl object-fill h-[400px]"
                loading="eager"
              />
              <div className="flex justify-between pt-6 pb-2">
                <Link
                  href="#"
                  className="text-primary hover:text-[#E63E6D] text-2xl font-bold"
                >
                  Tmuzik
                </Link>
                <div className="flex gap-2">
                  <p className="text-3xl">💭</p>
                  <p className="text-primary text-3xl">💟</p>
                </div>
              </div>
            </div>
            <div className="p-4 absolute right-[230px] border-neutral-100 rounded-xl bg-neutral-100">
              <Image
                src="/png/pag.png"
                width={400}
                height={450}
                alt=""
                className="rounded-xl object-fill h-[400px]"
                loading="eager"
              />
              <div className="flex justify-between pt-4">
                <Link
                  href="#"
                  className="text-primary hover:text-[#E63E6D] text-2xl font-bold"
                >
                  Pag Landing Page
                </Link>
                <div className="flex gap-2">
                  <p className="text-3xl">💭</p>
                  <p className="text-primary text-3xl">💟</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ProjectPage;
