import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link key="canonical" rel="canonical" href={`https://reactresume.com${pathname}`} />

        <link rel="icon" sizes="any" href="/favicon.png" />
        <link type="image/svg+xml" rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://reactresume.com${pathname}`} />

        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://anthonyclark1996.com",
              "@type": "Anthony Clark",
              "name": "Anthony Clark",
              "jobTitle": "Software Engineer",
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
