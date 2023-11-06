import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div id="contact" className="section relative bg-white pb-20">
      <div className="container mx-auto px-4 xl:max-w-6xl">
        <div className="-mx-4 flex flex-row flex-wrap justify-center">
          <div className="max-w-ful w-full px-4 lg:w-8/12">
            <div className="w-full border-b border-gray-100 bg-gray-50 p-12">
              {/* section header */}
              <header className="mx-auto mb-12 text-center lg:px-20">
                <h2 className="fade-up-show mb-2 text-2xl font-bold leading-normal text-gray-800">
                  <span className="font-light">Contact</span> Us
                </h2>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 60"
                  style={{ margin: "0 auto", height: "35px" }}
                >
                  <circle
                    cx="50.1"
                    cy="30.4"
                    r="5"
                    className="stroke-primary"
                    style={{
                      fill: "transparent",
                      strokeWidth: "2",
                      strokeMiterlimit: "10",
                    }}
                  ></circle>
                  <line
                    x1="55.1"
                    y1="30.4"
                    x2="100"
                    y2="30.4"
                    className="stroke-primary"
                    style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                  ></line>
                  <line
                    x1="45.1"
                    y1="30.4"
                    x2="0"
                    y2="30.4"
                    className="stroke-primary"
                    style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                  ></line>
                </svg>
                <p className="fade-up-show mx-auto pb-2 text-xl font-light leading-relaxed text-gray-600">
                  Have questions about service, please contact us.
                </p>
              </header>
              {/* end section header */}

              {/* contact form */}
              <form action="#">
                <div className="fade-up-show -mx-4 flex flex-row flex-wrap">
                  <div className="mb-6 w-full max-w-full flex-shrink px-4 md:w-1/2">
                    <label className="mb-2 inline-block" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="relative w-full overflow-x-auto rounded border-b border-gray-100 bg-white px-5 py-3 leading-5 text-gray-800 focus:border-gray-400 focus:outline-none focus:ring-0"
                      id="name"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="mb-6 w-full max-w-full flex-shrink px-4 md:w-1/2">
                    <label className="mb-2 inline-block" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="relative w-full overflow-x-auto rounded border-b border-gray-100 bg-white px-5 py-3 leading-5 text-gray-800 focus:border-gray-400 focus:outline-none focus:ring-0"
                      name="email"
                      id="email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="fade-up-show mb-6">
                  <label className="mb-2 inline-block" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="relative w-full overflow-x-auto rounded border-b border-gray-100 bg-white px-5 py-3 leading-5 text-gray-800 focus:border-gray-400 focus:outline-none focus:ring-0"
                    name="subject"
                    id="subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="fade-up-show mb-6">
                  <label className="mb-2 inline-block" htmlFor="messages">
                    Message
                  </label>
                  <textarea
                    className="relative w-full overflow-x-auto rounded border-b border-gray-100 bg-white px-5 py-3 leading-5 text-gray-800 focus:border-gray-400 focus:outline-none focus:ring-0"
                    name="message"
                    rows="10"
                    id="messages"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="fade-up-show mb-6 text-center">
                  <Link
                    className="inline-block border border-black bg-black px-10 py-2.5 text-center leading-normal text-gray-100 hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                    href="#project"
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
                    Send message
                  </Link>
                </div>
              </form>
              {/* end contact form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
