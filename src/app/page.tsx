import Container from "@/components/container";
import GroupCircle from "@/components/group-circle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <section id="home">
        <Container className="flex flex-row justify-between">
          <div className="flex flex-col gap-4 mt-8">
            <GroupCircle />
          </div>
          <div className="flex justify-end pb-10 pt-14">
            <p className="max-w-[500px] text-2xl text-white">
              Hi, I am Tien a frontend web developer from VietNam. I enjoy
              building everything from small business sites to rich interative
              web apps.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-row justify-between">
            <div className="flex gap-28">
              <div>
                <Image
                  src="/jpg/tiencute.jpg"
                  alt=""
                  width={450}
                  height={400}
                  className="rounded-t-full border-2 h-[520px] border-white object-cover"
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="flex flex-col justify-center gap-4">
                  <h1 className="text-primary text-7xl text font-bold">
                    HELLO <br /> I’M <br /> TIEN
                    <span className="text-white">.</span>
                  </h1>
                  <h3 className="text-2xl text-neutral-300">
                    FRONTEND DEVELOPER
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-6xl text-white animate-bounce">❆</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
