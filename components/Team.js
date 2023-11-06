import Image from 'next/image';
import Link from 'next/link';

import { getFullTeam } from '@/sanity/sanity-utils';
import DynamicIconRenderer from './DynamicIconRenderer';

const Team = async () => {
  const team = await getFullTeam();

  return (
    <div
      id="team"
      className="section relative bg-white pb-8 pt-20 md:pt-16"
    >
      <div className="container mx-auto px-4 xl:max-w-6xl">
        {/* section header */}
        <header className="mx-auto mb-12 text-center">
          <h2 className="fade-up-show mb-2 text-2xl font-bold leading-normal text-gray-800">
            <span className="font-light">Our</span> Team
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
        </header>
        {/* end section header */}

        {/* row */}
        <div className="-mx-4 flex flex-row flex-wrap justify-center">
          {team
            ? team.map((teammate) => (
                <div
                  key={teammate._id}
                  className="fade-up-show w-2/3 max-w-full flex-shrink px-4 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6"
                >
                  <div className="hover-grayscale-0 relative mb-12 overflow-hidden bg-white">
                    {/* team block */}
                    <div className="relative overflow-hidden px-6">
                      <Image
                        src={teammate.image_url}
                        width={200}
                        height={200}
                        className="mx-auto h-auto max-w-full rounded-full bg-gray-50 grayscale"
                        alt={teammate.image_alt}
                      />
                    </div>
                    <div className="pt-6 text-center">
                      <p className="mb-1 text-lg font-bold leading-normal">
                        {teammate.name}
                      </p>
                      <p className="font-light leading-relaxed text-gray-500">
                        {teammate.title}
                      </p>
                      {/* social icon */}
                      <div className="mb-5 mt-2 space-x-2">
                        {teammate.rrss
                          ? teammate.rrss.map((rrss) => (
                              <Link
                                key={`${rrss.socialNetwork.base_url}-${rrss.username}`}
                                className="hover:text-blue-700"
                                aria-label="Twitter link"
                                href={new URL(
                                  rrss.username,
                                  rrss.socialNetwork.base_url,
                                ).toString()}
                              >
                                <DynamicIconRenderer
                                  icon={rrss.socialNetwork.icon}
                                  className="inline-block h-[1rem] w-[1rem]"
                                />
                              </Link>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                  {/* end team block */}
                </div>
              ))
            : null}
        </div>
        {/* end row */}
      </div>
    </div>
  );
};

export default Team;
