export default function OzzyRenosData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ozzy Renos",
    image: "https://www.ozzyrenos.ca/bathroom9-after.jpg",
    "@id": "https://www.ozzyrenos.ca",
    url: "https://www.ozzyrenos.ca",
    telephone: "905-932-6681",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8065 Post Rd",
      addressLocality: "Niagara Falls",
      addressRegion: "ON",
      postalCode: "L2H 2L2",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.0996,
      longitude: -79.1329,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
