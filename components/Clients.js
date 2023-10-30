import Image from "next/image";

function Clients() {
  return (
    <div
      id="clients"
      // className="section relative py-8 bg-white dark:bg-gray-800"
      className="section relative py-8 bg-white"
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
                        <Image
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/assets/img/img1.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/assets/img/img2.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/assets/img/img3.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/assets/img/img4.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/assets/img/img5.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 text-center pb-3">
                      <a href="#" target="_blank">
                        <Image
                          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
                          src="/assets/img/img6.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
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
  );
}

export default Clients;
