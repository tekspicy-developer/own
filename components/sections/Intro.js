import Link from "next/link";

export default function Intro() {
  return (
    <>
      <section className="relative bg-[url('/bg.png')] bg-cover bg-center min-h-screen">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.58)] backdrop-blur-xs backdrop-saturate-150 shadow"></div>
        <div className="relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold halant-bold tracking-tight flex flex-col items-center text-center px-4 pt-30">
            <span className="bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] bg-clip-text text-transparent font-bold mb-4 pb-1">
              Spicing Up
            </span>
            <span className="text-foreground">Your Digital Presence</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed py-6 text-center">Powerful websites that ignite your brand and drive results. We blend cutting-edge technology with bold design to create digital experiences that truly stand out.</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center py-6">

            <Link href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium 
             rounded-[10px] bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] text-white 
             hover:shadow-[0_0_30px_hsl(15_100%_55%_/_0.3)] transition duration-300 group cursor-pointer"
            >
              Start Your Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <Link href="#services"
            className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[10px] bg-transparent text-white text-lg font-semibold hover:bg-white transition duration-300 group cursor-pointer border-1 border-white hover:text-black active:bg-white active:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              View Our Services
            </Link>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {/* Feature 1: Lightning Fast */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] rounded-lg mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap w-6 h-6 text-white"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">Optimized performance that loads in milliseconds</p>
            </div>

            {/* Feature 2: Modern Tech */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[linear-gradient(135deg,hsl(230,35%,15%)_0%,hsl(260,70%,60%)_100%)] rounded-lg mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code w-6 h-6 text-white"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Modern Tech</h3>
              <p className="text-muted-foreground">Built with the latest frameworks and technologies</p>
            </div>

            {/* Feature 3: Unique Design */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] rounded-lg mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles w-6 h-6 text-white"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Unique Design</h3>
              <p className="text-muted-foreground">Stand out with custom, eye-catching designs</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
