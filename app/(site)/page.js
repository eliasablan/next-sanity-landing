import Image from "next/image";

export default function Home() {
  return (
    <main id="content">
      {/* hero start */}
      <div
        id="hero"
        className="section relative z-0 py-16 md:pt-32 md:pb-20 bg-gray-50"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap flex-row -mx-4 justify-center">
            {/* content */}
            <div className="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
              {/* <Image
                src="src/img/dummy/hero.svg"
                className="w-full max-w-full h-auto"
                alt="creative agency"
              /> */}
            </div>
            {/* end content */}

            {/* text */}
            <div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
              <div className="text-center lg:text-left mt-6 lg:mt-0">
                <div className="mb-12">
                  <h1 className="text-4xl leading-normal text-black font-bold mb-4">
                    We are a Digital Agency
                    <br />
                    serve
                    <span
                      data-toggle="typed"
                      data-options='{"strings": ["Online Marketing", "Web Design", "Mobile Apps", "Brand Identity", "Social Content"]}'
                    ></span>
                  </h1>
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
      {/* end Hero */}

      {/* start services */}
      <div
        id="services"
        className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* Heading start */}
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
              What We Do
            </h2>
            {/* <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style="margin: 0 auto; height: 35px"
              xml:space="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r="5"
                className="stroke-primary"
                style="
                  fill: transparent;
                  stroke-width: 2;
                  stroke-miterlimit: 10;
                "
              ></circle>
              <line
                x1="55.1"
                y1="30.4"
                x2="100"
                y2="30.4"
                className="stroke-primary"
                style="stroke-width: 2; stroke-miterlimit: 10"
              ></line>
              <line
                x1="45.1"
                y1="30.4"
                x2="0"
                y2="30.4"
                className="stroke-primary"
                style="stroke-width: 2; stroke-miterlimit: 10"
              ></line>
            </svg> */}
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
              Save time managing advertising & Content for your business.
            </p>
          </header>
          {/* End heading */}

          {/* row */}
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  SEO Services
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
              {/* end service block */}
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-chat-square-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Social Content
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
              {/* end service block */}
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-badge-ad"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Creative ads
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
              {/* end service block */}
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-card-checklist"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Brand Identity
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
              {/* end service block */}
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-wallet2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Budget & Marketing
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
              {/* end service block */}
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              {/* service block */}
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-funnel"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Optimize conversions
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
              {/* end service block */}
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
      {/* End Service */}

      {/* Portfolio Content */}
      <div
        id="portfolio"
        className="section relative z-0 py-12 md:py-16 bg-white"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* Heading start */}
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
              Our work
            </h2>
            {/* <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style="margin: 0 auto; height: 35px"
              xml:space="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r="5"
                className="stroke-primary"
                style="
                  fill: transparent;
                  stroke-width: 2;
                  stroke-miterlimit: 10;
                "
              ></circle>
              <line
                x1="55.1"
                y1="30.4"
                x2="100"
                y2="30.4"
                className="stroke-primary"
                style="stroke-width: 2; stroke-miterlimit: 10"
              ></line>
              <line
                x1="45.1"
                y1="30.4"
                x2="0"
                y2="30.4"
                className="stroke-primary"
                style="stroke-width: 2; stroke-miterlimit: 10"
              ></line>
            </svg> */}
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
              We create engaging experiences that are innovatingand beautiful.
            </p>
          </header>
          {/* End heading */}
        </div>

        <div className="flex flex-wrap flex-row">
          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img1.jpg"
                data-gallery="gallery1"
                data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img1.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    Logo Design
                  </h3>
                  <small className="d-block">Branding</small>
                </div>
              </a>
            </div>
          </figure>

          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img2.jpg"
                data-gallery="gallery1"
                data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img2.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    Web Development
                  </h3>
                  <small className="d-block">Web</small>
                </div>
              </a>
            </div>
          </figure>

          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img3.jpg"
                data-gallery="gallery1"
                data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img3.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    Graphic Design
                  </h3>
                  <small className="d-block">Graphic</small>
                </div>
              </a>
            </div>
          </figure>

          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img4.jpg"
                data-gallery="gallery1"
                data-glightbox="title: My title; description:  This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img4.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    Logo Design
                  </h3>
                  <small className="d-block">Branding</small>
                </div>
              </a>
            </div>
          </figure>

          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".7s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img5.jpg"
                data-gallery="gallery1"
                data-glightbox="title: My title; description:  This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img5.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    Web Development
                  </h3>
                  <small className="d-block">Web</small>
                </div>
              </a>
            </div>
          </figure>

          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img6.jpg"
                data-gallery="gallery1"
                data-glightbox="title: Graphic Design; description: This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img6.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    Graphic Design
                  </h3>
                  <small className="d-block">Graphic</small>
                </div>
              </a>
            </div>
          </figure>

          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img7.jpg"
                data-gallery="gallery1"
                data-glightbox="title: Logo Design; description: This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img7.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    Logo Design
                  </h3>
                  <small className="d-block">Branding</small>
                </div>
              </a>
            </div>
          </figure>

          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img8.jpg"
                data-gallery="gallery1"
                data-glightbox="title: Web Development; description: This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img8.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    Web Development
                  </h3>
                  <small className="d-block">Web</small>
                </div>
              </a>
            </div>
          </figure>

          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img9.jpg"
                data-gallery="gallery1"
                data-glightbox="title: Graphic Design; description: This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img9.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    Graphic Design
                  </h3>
                  <small className="d-block">Graphic</small>
                </div>
              </a>
            </div>
          </figure>

          <figure
            className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".7s"
          >
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a
                href="src/img/dummy/img10.jpg"
                data-gallery="gallery1"
                data-glightbox="title: App Design; description: This is a wider card with supporting text below as a natural lead-in to additional content"
                className="glightbox3"
              >
                {/* <Image
                  className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
                  src="src/img/dummy/img10.jpg"
                  alt="Image Description"
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                  <h3 className="text-base leading-normal font-semibold my-1 text-white">
                    App Design
                  </h3>
                  <small className="d-block">App</small>
                </div>
              </a>
            </div>
          </figure>
        </div>
      </div>
      {/*  End Content */}

      {/* start clients */}
      <div
        id="clients"
        className="section relative py-8 bg-white dark:bg-gray-800"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="lex flex-wrap flex-row -mx-4 justify-center">
            <div className="w-full px-4">
              {/* slider client */}
              <div
                id="post-carousel"
                className="navslider-hover splide post-carousel"
              >
                <div className="splide__track">
                  <div className="splide__list grayscale">
                    <div className="splide__slide">
                      <div className="w-full px-4 text-center pb-3">
                        <a href="#" target="_blank">
                          {/* <Image
                            className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                            src="src/img/dummy/img1.png"
                            alt="Image Description"
                          /> */}
                        </a>
                      </div>
                    </div>
                    <div className="splide__slide">
                      <div className="w-full px-4 text-center pb-3">
                        <a href="#" target="_blank">
                          {/* <Image
                            className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                            src="src/img/dummy/img2.png"
                            alt="Image Description"
                          /> */}
                        </a>
                      </div>
                    </div>
                    <div className="splide__slide">
                      <div className="w-full px-4 text-center pb-3">
                        <a href="#" target="_blank">
                          {/* <Image
                            className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                            src="src/img/dummy/img3.png"
                            alt="Image Description"
                          /> */}
                        </a>
                      </div>
                    </div>
                    <div className="splide__slide">
                      <div className="w-full px-4 text-center pb-3">
                        <a href="#" target="_blank">
                          {/* <Image
                            className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                            src="src/img/dummy/img4.png"
                            alt="Image Description"
                          /> */}
                        </a>
                      </div>
                    </div>
                    <div className="splide__slide">
                      <div className="w-full px-4 text-center pb-3">
                        <a href="#" target="_blank">
                          {/* <Image
                            className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                            src="src/img/dummy/img5.png"
                            alt="Image Description"
                          /> */}
                        </a>
                      </div>
                    </div>
                    <div className="splide__slide">
                      <div className="w-full px-4 text-center pb-3">
                        <a href="#" target="_blank">
                          {/* <Image
                            className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                            src="src/img/dummy/img6.png"
                            alt="Image Description"
                          /> */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end slider client */}
            </div>
          </div>
        </div>
      </div>
      {/* End brand-->

      {/* Team start */}
      <div
        id="team"
        className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* section header */}
          <header className="text-center mx-auto mb-12">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
              <span className="font-light">Our</span> Team
            </h2>
            {/* <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style="margin: 0 auto; height: 35px"
              xml:space="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r="5"
                className="stroke-primary"
                style="
                  fill: transparent;
                  stroke-width: 2;
                  stroke-miterlimit: 10;
                "
              ></circle>
              <line
                x1="55.1"
                y1="30.4"
                x2="100"
                y2="30.4"
                className="stroke-primary"
                style="stroke-width: 2; stroke-miterlimit: 10"
              ></line>
              <line
                x1="45.1"
                y1="30.4"
                x2="0"
                y2="30.4"
                className="stroke-primary"
                style="stroke-width: 2; stroke-miterlimit: 10"
              ></line>
            </svg> */}
          </header>
          {/* end section header */}

          {/* row */}
          <div className="flex flex-wrap flex-row -mx-4 justify-center">
            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                {/* team block */}
                <div className="relative overflow-hidden px-6">
                  {/* <Image
                    src="src/img/dummy/avatar1.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  /> */}
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">
                    Joe Antonio
                  </p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Founder CEO
                  </p>
                  {/* social icon */}
                  <div className="mt-2 mb-5 space-x-2">
                    <a
                      className="hover:text-blue-700"
                      aria-label="Twitter link"
                      href="#"
                    >
                      {/* <i className="fab fa-twitter text-twitter"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Facebook link"
                      href="#"
                    >
                      {/* <i className="fab fa-facebook text-facebook"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Instagram link"
                      href="#"
                    >
                      {/* <i className="fab fa-instagram text-instagram"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Linkedin link"
                      href="#"
                    >
                      {/* <i className="fab fa-linkedin text-linkedin"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* end team block */}
            </div>

            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              {/* team block */}
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div className="relative overflow-hidden px-6">
                  {/* <Image
                    src="src/img/dummy/avatar3.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  /> */}
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">
                    Sarah Daeva
                  </p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Marketing
                  </p>
                  {/* social icon */}
                  <div className="mt-2 mb-5 space-x-2">
                    <a
                      className="hover:text-blue-700"
                      aria-label="Twitter link"
                      href="#"
                    >
                      {/* <i className="fab fa-twitter text-twitter"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Facebook link"
                      href="#"
                    >
                      {/* <i className="fab fa-facebook text-facebook"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Instagram link"
                      href="#"
                    >
                      {/* <i className="fab fa-instagram text-instagram"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Linkedin link"
                      href="#"
                    >
                      {/* <i className="fab fa-linkedin text-linkedin"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* end team block */}
            </div>

            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              {/* team block */}
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="relative overflow-hidden px-6">
                  {/* <Image
                    src="src/img/dummy/avatar2.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  /> */}
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">
                    Daniel Emo
                  </p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Sales manager
                  </p>
                  {/* social icon */}
                  <div className="mt-2 mb-5 space-x-2">
                    <a
                      className="hover:text-blue-700"
                      aria-label="Twitter link"
                      href="#"
                    >
                      {/* <i className="fab fa-twitter text-twitter"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Facebook link"
                      href="#"
                    >
                      {/* <i className="fab fa-facebook text-facebook"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Instagram link"
                      href="#"
                    >
                      {/* <i className="fab fa-instagram text-instagram"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Linkedin link"
                      href="#"
                    >
                      {/* <i className="fab fa-linkedin text-linkedin"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* end team block */}
            </div>

            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              {/* team block */}
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <div className="relative overflow-hidden px-6">
                  {/* <Image
                    src="src/img/dummy/avatar4.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  /> */}
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">
                    Toni Lana
                  </p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    UI/UX Designer
                  </p>
                  {/* social icon */}
                  <div className="mt-2 mb-5 space-x-2">
                    <a
                      className="hover:text-blue-700"
                      aria-label="Twitter link"
                      href="#"
                    >
                      {/* <i className="fab fa-twitter text-twitter"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Facebook link"
                      href="#"
                    >
                      {/* <i className="fab fa-facebook text-facebook"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Instagram link"
                      href="#"
                    >
                      {/* <i className="fab fa-instagram text-instagram"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="hover:text-blue-700"
                      aria-label="Linkedin link"
                      href="#"
                    >
                      {/* <i className="fab fa-linkedin text-linkedin"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* end team block */}
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
      {/* End Team-->

      {/* contact start */}
      <div
        id="contact"
        className="section relative pb-20 bg-white dark:bg-gray-800"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap flex-row -mx-4 justify-center">
            <div className="max-w-ful px-4 w-full lg:w-8/12">
              <div
                className="bg-gray-50 border-b border-gray-100 w-full p-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                {/* section header */}
                <header className="text-center mx-auto mb-12 lg:px-20">
                  <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                    <span className="font-light">Contact</span> Us
                  </h2>
                  {/* <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 60"
                    style="margin: 0 auto; height: 35px"
                    xml:space="preserve"
                  >
                    <circle
                      cx="50.1"
                      cy="30.4"
                      r="5"
                      className="stroke-primary"
                      style="
                        fill: transparent;
                        stroke-width: 2;
                        stroke-miterlimit: 10;
                      "
                    ></circle>
                    <line
                      x1="55.1"
                      y1="30.4"
                      x2="100"
                      y2="30.4"
                      className="stroke-primary"
                      style="stroke-width: 2; stroke-miterlimit: 10"
                    ></line>
                    <line
                      x1="45.1"
                      y1="30.4"
                      x2="0"
                      y2="30.4"
                      className="stroke-primary"
                      style="stroke-width: 2; stroke-miterlimit: 10"
                    ></line>
                  </svg> */}
                  <p className="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">
                    Have questions about service, please contact us.
                  </p>
                </header>
                {/* end section header */}

                {/* contact form */}
                <form action="#">
                  <div className="flex flex-wrap flex-row -mx-4">
                    <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                      <label className="inline-block mb-2" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                        id="name"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                      <label className="inline-block mb-2" htmlFor="email">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                        name="email"
                        id="email"
                      />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="inline-block mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                      name="subject"
                      id="subject"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="mb-6">
                    <label className="inline-block mb-2" htmlFor="messages">
                      Message
                    </label>
                    <textarea
                      className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                      name="message"
                      rows="10"
                      id="messages"
                    ></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="text-center mb-6">
                    <a
                      className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border border-black hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                      href="#project"
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
                      Send message
                    </a>
                  </div>
                </form>
                {/* end contact form */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End contact */}
    </main>
  );
}
