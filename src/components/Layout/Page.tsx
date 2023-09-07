import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo, PropsWithChildren } from 'react';

import { HomepageMeta } from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({ children, title, description }) => {
  const { asPath: pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* Canonical link */}
        <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical" />

        {/* Favicon and App Icons */}
        <link href="/favicon.png" rel="icon" sizes="any" />
        <link href="/favicon.png" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Mobile Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Locale and Content Language */}
        <meta property="og:locale" content="en_US" />
        <meta name="content-language" content="en" />

        {/* Open Graph */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://reactresume.com${pathname}`} property="og:url" />
        <meta content="https://reactresume.com/your-image.jpg" property="og:image" />

        {/* Twitter Cards */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="https://reactresume.com/your-image.jpg" name="twitter:image" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Anthony Clark",
              "jobTitle": "Software Engineer",
              // Add more attributes as needed
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
