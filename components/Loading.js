import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'

export default function Loading({ notionSlug }) {
  const { locale } = useRouter()
  const [showNotion, setshowNotion] = useState(false)

  if (notionSlug) {
    setTimeout(() => {
      setshowNotion(true)
    }, 3000)
  }

  const t = lang[locale]
  return (
    <div className='py-6 sm:py-8 lg:py-12'>
      <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
        <div className='flex flex-col items-center'>
          <div className='inline-flex items-center gap-2.5 mb-8'>
          <Image
              src='/favicon.png'
              alt='Logo'
              width={50}
              height={50}
            />
          </div>

          <p className='inline-flex items-center mb-4 text-sm font-semibold uppercase md:text-base'>
            <svg className='w-5 h-5 mr-3 -ml-1 text-gray-400 animate-spin' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
            </svg>
            {t.ERROR.LOADING}
          </p>
          {showNotion &&
            <Link
              passHref
              href={`https://${BLOG.notionDomain}/${notionSlug}`} scroll={false}
              className='text-gray-500 transition duration-100 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
            >
              <ExternalLinkIcon className='inline-block w-5 h-5 mb-1' />
              <span className='m-1'>{t.ERROR.TIMEOUT_TEXT}</span>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

// export default Loading
