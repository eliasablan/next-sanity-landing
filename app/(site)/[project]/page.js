import Image from "next/image";
import { getProject } from "@/sanity/sanity-utils";

import Date from "@/components/date";
import BackToHomeButton from "@/components/BackToHomeButton";

const Project = async ({ params }) => {
  const project = await getProject(params.project);

  return (
    <div className="container xl:max-w-6xl mx-auto px-4 pt-20 pb-10 mb-6">
      <BackToHomeButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </BackToHomeButton>

      <h1 className="pt-6 text-4xl leading-normal font-bold text-gray-800">
        {project.title}
      </h1>
      <h2 className="py-2 text-2xl leading-normal font-semibold text-gray-800">
        {project.category}
      </h2>
      <Image
        className="rounded-lg border-2 my-6"
        src={project.image_url}
        width={800}
        height={400}
        alt={project.image_alt}
      />
      <p className="text-lg">{project.description}</p>
      <h2 className="my-6 text-lg font-semibold text-gray-800">
        <Date dateString={project.date} />
      </h2>
    </div>
  );
};

export default Project;
