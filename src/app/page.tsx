import Circle from "@/components/circle";
import Container from "@/components/container";
import GroupCircle from "@/components/group-circle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF3DA]">
      <section>
        <Container className="flex flex-row justify-between">
          <div className="flex flex-col gap-4 mt-8">
            <GroupCircle />
          </div>
          <div className="flex justify-end pb-10 pt-14">
            <p className="max-w-[500px] text-2xl text-[#0C134F]">
              Hi, I am Tien a frontend web developer from VietNam. I enjoy
              building everything from small business sites to rich interative
              web apps.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <div className="flex flex-row justify-between">
          <div className="flex gap-28">
            <div>
              <Image
                src="/jpg/avatar.jpg"
                alt=""
                width={450}
                height={400}
                className="rounded-t-full border-2 h-[520px] border-black object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-primary text-7xl text font-bold">
                HELLO <br /> I’M <br /> TIEN
                <span className="text-black">.</span>
              </h1>
              <h3 className="text-2xl text-neutral-500">FRONTEND DEVELOPER</h3>
              <div className="text-[#EF9595] hover:text-[#D35D6E]">
                <Link href="/about" className="flex gap-2 cursor-pointer ">
                  <p className="text-xl ">Explore More</p>
                  <p className="text-xl">&#8594;</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end mr-10">
            <p className="text-7xl animate-bounce">❆</p>
          </div>
        </div>
      </section>
    </main>
  );
}
