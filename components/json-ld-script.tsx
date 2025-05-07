export function JsonLdScript() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Festival",
    name: "Jeffreys Bay Surf Festival 2025",
    description:
      "South Africa's premier surf, music, and adventure festival at the legendary Supertubes, Jeffreys Bay.",
    startDate: "2025-05-15T09:00:00+02:00",
    endDate: "2025-05-22T18:00:00+02:00",
    location: {
      "@type": "Place",
      name: "Supertubes Park",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Supertubes Beach",
        addressLocality: "Jeffreys Bay",
        addressRegion: "Eastern Cape",
        postalCode: "6330",
        addressCountry: "ZA",
      },
    },
    image: ["https://www.jbaysurffest.co.za/images/wsl/wsl-4.jpg"],
    offers: {
      "@type": "Offer",
      url: "https://airdosh.co.za/#/",
      price: "250",
      priceCurrency: "ZAR",
      availability: "https://schema.org/InStock",
      validFrom: "2024-11-01T00:00:00+02:00",
    },
    organizer: {
      "@type": "Organization",
      name: "Jeffreys Bay Surf Festival",
      url: "https://www.jbaysurffest.co.za",
    },
    subEvents: [
      {
        "@type": "SportsEvent",
        name: "WSL Jeffreys Bay Tour Stop",
        description: "World Surf League Championship Tour event at Supertubes",
        startDate: "2025-05-15T09:00:00+02:00",
        endDate: "2025-05-18T18:00:00+02:00",
        location: {
          "@type": "Place",
          name: "Supertubes Beach",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jeffreys Bay",
            addressRegion: "Eastern Cape",
            addressCountry: "ZA",
          },
        },
        sport: "Surfing",
        competitor: {
          "@type": "SportsOrganization",
          name: "World Surf League",
        },
      },
      {
        "@type": "MusicEvent",
        name: "Park Off Music Festival",
        description: "South Africa's hottest music festival comes to JBay",
        startDate: "2025-05-19T16:00:00+02:00",
        endDate: "2025-05-20T23:00:00+02:00",
        location: {
          "@type": "Place",
          name: "Supertubes Park",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jeffreys Bay",
            addressRegion: "Eastern Cape",
            addressCountry: "ZA",
          },
        },
      },
      {
        "@type": "Event",
        name: "Comedy Night",
        description: "Laugh until your sides hurt with South Africa's funniest comedians",
        startDate: "2025-05-18T19:00:00+02:00",
        endDate: "2025-05-18T22:00:00+02:00",
        location: {
          "@type": "Place",
          name: "Supertubes Park",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jeffreys Bay",
            addressRegion: "Eastern Cape",
            addressCountry: "ZA",
          },
        },
      },
      {
        "@type": "SportsEvent",
        name: "Mountain Biking Competition",
        description: "Take on the challenging trails of the Eastern Cape",
        startDate: "2025-05-20T08:00:00+02:00",
        endDate: "2025-05-20T16:00:00+02:00",
        location: {
          "@type": "Place",
          name: "Jeffreys Bay Trails",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jeffreys Bay",
            addressRegion: "Eastern Cape",
            addressCountry: "ZA",
          },
        },
        sport: "Mountain Biking",
      },
      {
        "@type": "SportsEvent",
        name: "Jiujitsu Tournament",
        description: "Brazilian Jiujitsu tournament featuring competitors from across South Africa",
        startDate: "2025-05-21T09:00:00+02:00",
        endDate: "2025-05-21T17:00:00+02:00",
        location: {
          "@type": "Place",
          name: "Supertubes Park",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jeffreys Bay",
            addressRegion: "Eastern Cape",
            addressCountry: "ZA",
          },
        },
        sport: "Brazilian Jiujitsu",
      },
      {
        "@type": "SportsEvent",
        name: "Funduro",
        description: "Adventure motorcyclists will love our Funduro event",
        startDate: "2025-05-22T08:00:00+02:00",
        endDate: "2025-05-22T16:00:00+02:00",
        location: {
          "@type": "Place",
          name: "Jeffreys Bay Outback",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jeffreys Bay",
            addressRegion: "Eastern Cape",
            addressCountry: "ZA",
          },
        },
        sport: "Motorcycle Riding",
      },
      {
        "@type": "SportsEvent",
        name: "Fishing Competition",
        description: "Cast your line in our annual fishing competition",
        startDate: "2025-05-17T06:00:00+02:00",
        endDate: "2025-05-17T18:00:00+02:00",
        location: {
          "@type": "Place",
          name: "Jeffreys Bay Beach",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jeffreys Bay",
            addressRegion: "Eastern Cape",
            addressCountry: "ZA",
          },
        },
        sport: "Fishing",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
}
