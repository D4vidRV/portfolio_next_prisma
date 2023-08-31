import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/app/libs/sanity';
import { IProject } from '@/interfaces/projects';
import { getTranslator } from 'next-intl/server';

async function getProjects() {
  const query = `*[_type == "project"] {
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

export default async function Projects({
  params: { locale },
}: {
  params: any;
}) {
  const data: IProject[] = await getProjects();
  const t = await getTranslator(locale, 'projects');

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          {t('title')}
        </h1>
      </div>

      <div className='grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8'>
        {data.map((project) => (
          <article
            key={project._id}
            className='overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100'
          >
            <div className='h-56 w-full relative'>
              <Image
                fill
                src={project.imageUrl}
                alt='image of the project'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-4 sm:p-6'>
              <div className='flex justify-between items-center gap-2'>
                <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                  {project.title}
                </h3>
              </div>

              <p className=' line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
                {locale == 'en' ? project.overview : project.overview_es}
              </p>

              {!project.features ? (
                <div className='flex justify-between items-center gap-2'>
                  {!!project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-500'
                    >
                      {t('goToSiteButtonText')}
                      <span className='block transition-all group-hover:ms-0.5'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                          />
                        </svg>
                      </span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target='_blank'
                    className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500'
                  >
                    {t('viewMoreButtonText')}
                    <span className='block transition-all group-hover:ms-0.5'>
                      &rarr;
                    </span>
                  </a>
                </div>
              ) : (
                <div className='flex justify-between items-center gap-2'>
                  {!!project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-500'
                    >
                      {t('goToSiteButtonText')}
                      <span className='block transition-all group-hover:ms-0.5'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                          />
                        </svg>
                      </span>
                    </a>
                  )}
                  <Link
                    href={`projects/${project._id}`}
                    className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500'
                  >
                    {t('viewMoreButtonText')}
                    <span className='block transition-all group-hover:ms-0.5'>
                      &rarr;
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
