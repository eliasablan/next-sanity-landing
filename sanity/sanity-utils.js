import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: "Dummy Landing Web",
  apiVersion: "2023-10-30",
  useCdn: true,
});

const getEverything = async () => {
  return client.fetch(
    groq`*{
      ...,
    }`
  );
};

export { getEverything };
