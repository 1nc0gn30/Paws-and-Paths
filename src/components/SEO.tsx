import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

export const SEO = ({ title, description, canonical, type = 'website' }: SEOProps) => {
  const siteName = 'Paws & Paths Virginia Beach';
  const fullTitle = `${title} | ${siteName}`;
  const url = 'https://pawsandpaths.com'; // Placeholder base URL

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || url} />

      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Local SEO Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteName,
          "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7",
          "@id": url,
          "url": url,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving All Neighborhoods",
            "addressLocality": "Virginia Beach",
            "addressRegion": "VA",
            "postalCode": "23451",
            "addressCountry": "US"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "07:00",
            "closes": "20:00"
          }
        })}
      </script>
    </Helmet>
  );
};
