import { createClient, groq } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: 'Dummy Landing Web',
  apiVersion: '2023-10-30',
  useCdn: true,
});

const getEverything = async () => {
  return client.fetch(
    groq`*[_type!="portfolio"]{
      ...,
    }`,
  );
};

const getFullTeam = async () => {
  return client.fetch(
    groq`*[_type=="team"]{
      _id,
      name,
      title,
      "image_crop": image.crop,
      "image_url": image.asset->url,
      "image_alt": image.alt,
      rrss[]{
        socialNetwork->{
          base_url,
          icon
        },
        username
      },
    }`,
  );
};

const getProjects = async () => {
  return client.fetch(
    groq`*[_type=="portfolio"]{
      _id,
      title,
      category,
      "slug":slug.current,
      "image_crop": image.crop,
      "image_url": image.asset->url,
      "image_alt": image.alt,
    }`,
  );
};
const getProject = async (slug) => {
  return client.fetch(
    groq`*[_type=="portfolio" && slug.current == $slug][0]
    {
      date,
      title,
      category,
      description,
      "slug":slug.current,
      "image_crop": image.crop,
      "image_url": image.asset->url,
      "image_alt": image.alt,
    }`,
    { slug },
  );
};

export { getEverything, getFullTeam, getProjects, getProject };
