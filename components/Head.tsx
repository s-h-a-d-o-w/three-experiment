import NextHead from 'next/head';

export const Head: React.FC = () => (
  <NextHead>
    <title>Photo Gallery</title>
    <meta name="Description" content="Photo gallery" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ffffff" />

    <link rel="manifest" href="/manifest.json" />
    {/* Force favicon refresh on changes by updating date */}
    <link rel="icon" href="/favicon.ico?v=20210913" />
    <link rel="apple-touch-icon" href="/icons/android-chrome-192x192.png" />
  </NextHead>
);
