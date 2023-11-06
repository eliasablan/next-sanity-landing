import Image from 'next/image';
import Link from 'next/link';

function Clients() {
  return (
    <div id="clients" className="section relative bg-white py-8">
      <div className="container mx-auto px-4 xl:max-w-6xl">
        <div className="lex -mx-4 flex-row flex-wrap justify-center">
          <div className="w-full px-4">
            {/* slider client */}
            <div
              id="post-carousel"
              className="navslider-hover splide post-carousel fade-up-show"
            >
              <div className="splide__track">
                <div className="splide__list grayscale">
                  <div className="splide__slide">
                    <div className="w-full px-4 pb-3 text-center">
                      <Link href="#" target="_blank">
                        <Image
                          className="mx-auto h-auto max-w-full opacity-80 grayscale hover:opacity-100"
                          src="/assets/img/img1.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 pb-3 text-center">
                      <Link href="#" target="_blank">
                        <Image
                          className="mx-auto h-auto max-w-full opacity-80 grayscale hover:opacity-100"
                          src="/assets/img/img2.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 pb-3 text-center">
                      <Link href="#" target="_blank">
                        <Image
                          className="mx-auto h-auto max-w-full opacity-80 grayscale hover:opacity-100"
                          src="/assets/img/img3.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 pb-3 text-center">
                      <Link href="#" target="_blank">
                        <Image
                          className="mx-auto h-auto max-w-full opacity-80 grayscale hover:opacity-100"
                          src="/assets/img/img4.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 pb-3 text-center">
                      <Link href="#" target="_blank">
                        <Image
                          className="mx-auto h-auto max-w-full opacity-80 grayscale hover:opacity-100"
                          src="/assets/img/img5.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="w-full px-4 pb-3 text-center">
                      <Link href="#" target="_blank">
                        <Image
                          className="mx-auto h-auto max-w-full opacity-80 grayscale hover:opacity-100"
                          src="/assets/img/img6.png"
                          width={500}
                          height={500}
                          alt="Image Description"
                        />
                      </Link>
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
