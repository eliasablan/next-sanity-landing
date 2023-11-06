import Image from 'next/image';
import { getProject } from '@/sanity/sanity-utils';

import { DateJSX } from '@/components/date';
import BackToHomeButton from '@/components/BackToHomeButton';

const Project = async ({ params }) => {
  const project = await getProject(params.project);

  return (
    <div className="container mx-auto mb-6 px-4 pb-10 pt-20 xl:max-w-6xl">
      <BackToHomeButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="fade-down h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </BackToHomeButton>

      <h1 className="fade-down pt-6 text-4xl font-bold leading-normal text-gray-800">
        {project.title}
      </h1>
      <h2 className="fade-down py-2 text-2xl font-semibold leading-normal text-gray-800">
        {project.category}
      </h2>
      <Image
        className="fade-up my-6 rounded-lg border-2"
        src={project.image_url}
        width={800}
        height={400}
        alt={project.image_alt}
      />
      <p className="fade-up text-lg">{project.description}</p>
      <h2 className="fade-up my-6 text-lg font-semibold text-gray-800">
        <DateJSX dateString={project.date} />
      </h2>
    </div>
  );
};

export default Project;
