import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="pt-10 pb-20 bg-cover bg-center min-h-screen">
        <div className="intro bg-[url('/bg.png')] bg-cover bg-center min-h-screen">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight flex flex-col items-center text-center px-4 pt-20 gap-1">
            <span className="bg-gradient-to-r from-[#fd4d19] to-[#e01425] bg-clip-text text-transparent font-bold mb-4 pb-1">
              Spicing Up
            </span>
            <span className="text-foreground">Your Digital Presence</span>
          </h1>
        </div>
      </section>
    </>
  );
}
