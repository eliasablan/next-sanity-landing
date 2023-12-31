import { getEverything } from '@/sanity/sanity-utils';
import DynamicIconRenderer from './DynamicIconRenderer';
// import * as FaIcons from "react-icons/fa"; // Font Awesome Icons
// import * as SIcons from "react-icons/si"; // Simple Icons
// import * as FIcons from "react-icons/fi"; // Feather Icons
// import * as HIcons from "react-icons/hi"; // Hero Icons
// import * as MdIcons from "react-icons/md"; // Material Design Icons

// const DynamicIconRenderer = ({ name, provider }) => {
//   if (provider == "fa") return FaIcons[name]; // Font Awesome Icons
//   if (provider == "si") return SIcons[name]; // Simple Icons
//   if (provider == "fi") return FIcons[name]; // Feather Icons
//   if (provider == "hi") return HIcons[name]; // Hero Icons
//   if (provider == "mdi") return MdIcons[name]; // Material Design Icons
// };

const Services = async () => {
  const everything = await getEverything();
  const services = everything.filter((obj) => obj._type == 'service');

  return (
    <div
      id="services"
      className="section relative bg-white pb-8 pt-20 md:pb-0 md:pt-16"
    >
      <div className="container mx-auto px-4 xl:max-w-6xl">
        {/* Heading start */}
        <header className="mx-auto mb-12 text-center lg:px-20">
          <h2 className="fade-up-show mb-2 text-2xl font-bold leading-normal text-black">
            What We Do
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
            Save time managing advertising & Content for your business.
          </p>
        </header>
        {/* End heading */}

        {/* row */}
        <div className="-mx-4 flex flex-row flex-wrap text-center">
          {services
            ? services.map((service) => (
                <div
                  key={service._id}
                  className="fade-up-show w-full max-w-full flex-shrink px-4 sm:w-1/2 lg:w-1/3 lg:px-6"
                >
                  {/* service block */}
                  <div className="mb-12 transform border-b border-gray-100 bg-gray-50 px-12 py-8 transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="mb-2 inline-block text-gray-700">
                      {/* icon */}
                      <DynamicIconRenderer
                        icon={service.icon}
                        className="h-11 w-11"
                      />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold leading-normal text-black">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                  {/* end service block */}
                </div>
              ))
            : ''}
        </div>
        {/* end row */}
      </div>
    </div>
  );
};

export default Services;
