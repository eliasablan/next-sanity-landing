import Image from "next/image";
import HeroTypedHeader from "./HeroTypedHeader";

const Hero = () => {
  return (
    <div
      id="hero"
      className="section relative z-0 py-16 md:pt-32 md:pb-20 bg-gray-50"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {/* content */}
          <div className="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
            <Image
              src="assets/img/hero.svg"
              width={500}
              height={500}
              className="w-full max-w-full h-auto"
              alt="creative agency"
            />
          </div>
          {/* end content */}

          {/* text */}
          <div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
            <div className="text-center lg:text-left mt-6 lg:mt-0">
              <div className="mb-12">
                <HeroTypedHeader />
                <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                  We would direct you to limitless ideas and move your brand
                  into a global landscape.
                </p>
              </div>
              <a
                className="py-2.5 px-10 inline-block text-center leading-normal text-gray-900 bg-white border-b border-gray-100 hover:text-black hover:ring-0 focus:outline-none focus:ring-0 mr-4"
                href="#portfolio"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-1"
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
              </a>

              <a
                className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border-b border-gray-800 hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                target="_blank"
                href="https://aribudin.gumroad.com/l/tailone"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  className="inline-block mr-1"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
