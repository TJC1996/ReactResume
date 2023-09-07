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
        <meta content={description} name="description" />

        <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.png" rel="icon" sizes="any" />
        <link href="/favicon.png" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        <meta content={description} property="og:description" />
        <meta content={title} property="og:title" />
        <meta content={`https://reactresume.com${pathname}`} property="og:url" />

        <meta content={description} name="twitter:description" />
        <meta content={title} name="twitter:title" />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://anthonyclark1996.com",
              "@type": "Anthony Clark",
              "name": "Anthony Clark",
              "jobTitle": "Software Engineer",
            }),
          }}
          type="application/ld+json"
        />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
