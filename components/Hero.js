import Image from "next/image";
import HeroTypedHeader from "./HeroTypedHeader";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="hero"
      className="section fade-up relative z-0 bg-gray-50 py-16 md:pb-20 md:pt-32"
    >
      <div className="container mx-auto px-4 xl:max-w-6xl">
        <div className="-mx-4 flex flex-row flex-wrap justify-center">
          {/* content */}
          <div className="lg:px-18 mt-6 w-full max-w-full flex-shrink self-center px-4 sm:w-9/12 sm:px-12 lg:mt-0 lg:w-1/2">
            <Image
              src="assets/img/hero.svg"
              width={500}
              height={500}
              className="h-auto w-full max-w-full"
              alt="creative agency"
            />
          </div>
          {/* end content */}

          {/* text */}
          <div className="w-full max-w-full flex-shrink self-center px-4 md:w-9/12 lg:w-1/2 lg:pr-12">
            <div className="text-center lg:text-left">
              <div className="mb-12">
                <HeroTypedHeader />
                <p className="mx-auto pb-2 text-xl font-light leading-relaxed text-gray-500">
                  We would direct you to limitless ideas and move your brand
                  into a global landscape.
                </p>
              </div>
              <Link
                className="mr-4 inline-block border-b border-gray-100 bg-white px-10 py-2.5 text-center leading-normal text-gray-900 hover:text-black hover:ring-0 focus:outline-none focus:ring-0"
                href="#portfolio"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline-block"
                  width="1.5rem"
                  height="1.5rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M304,384V360c0-29,31.54-56.43,52-76,28.84-27.57,44-64.61,44-108,0-80-63.73-144-144-144A143.6,143.6,0,0,0,112,176c0,41.84,15.81,81.39,44,108,20.35,19.21,52,46.7,52,76v24"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                  <line
                    x1="224"
                    y1="480"
                    x2="288"
                    y2="480"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                  <line
                    x1="208"
                    y1="432"
                    x2="304"
                    y2="432"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                  <line
                    x1="256"
                    y1="384"
                    x2="256"
                    y2="256"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                  <path
                    d="M294,240s-21.51,16-38,16-38-16-38-16"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                </svg>
                Our Work
              </Link>

              <Link
                className="mt-6 inline-block border-b border-gray-800 bg-black px-10 py-2.5 text-center leading-normal text-gray-100 hover:text-white hover:ring-0 focus:outline-none focus:ring-0 lg:mt-0"
                target="_blank"
                href="https://aribudin.gumroad.com/l/tailone"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  className="mr-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <rect
                    x="48"
                    y="96"
                    width="416"
                    height="320"
                    rx="40"
                    ry="40"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                  <polyline
                    points="112 160 256 272 400 160"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                </svg>
                Download Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
