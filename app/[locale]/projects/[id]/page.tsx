import { client } from "@/app/libs/sanity";
import { IProject } from "@/interfaces/projects";
import Image from "next/image";
import { useLocale } from "next-intl";

async function getProject(id: String) {
  const query = `*[_type == "project" && _id == "${id}"][0] {
    title,
    overview,
    overview_es,
    link,
    github,
    _id,
    "imageUrl": image.asset->url,
    "features": features[]{
        "description": description,
        "description_es": description_es,
        "imageUrl": image.asset->url
    }
    }`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Details({ params }: { params: any }) {
  const { id } = params;
  const project: IProject = await getProject(id);
  const features = project?.features ?? [];
  const locale = useLocale();

  if (!project) {
    return (
      <div className="mt-20 text-center min-h-ful">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          404 Project not found
        </h1>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex space-y2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {project?.title ?? ""}
        </h1>
        <a href={project?.github ?? "#"} target="_blank" className="pl-8">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className="h-10 text-teal-500 hover:text-teal-600"
          >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
          </svg>
        </a>
      </div>

      {features.map((feature, index) => (
        <div
          key={index}
          className="items-center space-y-2 xl:grid xl:grid-cols-8 xl:gap-x-8 xl:space-y-0 pb-8"
        >
          <div className="flex flex-col items-center pt-8 xl:col-span-2">
            <div className="h-80 w-full relative">
              <Image
                fill
                src={feature.imageUrl}
                alt="image of feature"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-6">
            {locale == "en" ? feature.description : feature.description_es}
          </div>
        </div>
      ))}
    </div>
  );
}
