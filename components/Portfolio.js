import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/sanity/sanity-utils';

const Portfolio = async () => {
  const portfolio = await getProjects();

  return (
    <div
      id="portfolio"
      className="section relative z-0 bg-white py-12 md:py-16"
    >
      <div className="container mx-auto px-4 xl:max-w-6xl">
        {/* Heading start */}
        <header className="mx-auto mb-12 text-center lg:px-20">
          <h2 className="fade-up-show mb-2 text-2xl font-bold leading-normal text-black">
            Our work
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: '0 auto', height: '35px' }}
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: 'transparent',
                strokeWidth: '2',
                strokeMiterlimit: '10',
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
          <p className="fade-up-show mx-auto pb-2 text-xl font-light leading-relaxed text-gray-500">
            We create engaging experiences that are innovatingand
            beautiful.
          </p>
        </header>
        {/* End heading */}

        <div className="flex flex-row flex-wrap">
          {/* mapping */}
          {portfolio
            ? portfolio.map((project) => (
                <figure
                  key={project._id}
                  className="fade-up-show group w-full max-w-full flex-shrink px-3 sm:w-1/2 lg:w-1/3"
                >
                  <div className="relative mb-6 cursor-pointer overflow-hidden">
                    <Link href={`/${project.slug}`}>
                      <Image
                        className="block h-auto w-full transform grayscale duration-500 hover:scale-125 hover:grayscale-0"
                        src={project.image_url}
                        width={500}
                        height={500}
                        alt="Image Description"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 overflow-hidden bg-black px-4 py-2 text-center text-gray-100 opacity-0 transition-opacity duration-500 ease-in group-hover:opacity-100">
                        <h3 className="my-1 text-base font-semibold leading-normal text-white">
                          {project.title}
                        </h3>
                        <small className="d-block">
                          {project.category}
                        </small>
                      </div>
                    </Link>
                  </div>
                </figure>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
