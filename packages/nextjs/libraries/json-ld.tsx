import React from "react";

const data = {
  "@context": "http://schema.org",
  "@graph": [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: "https://dashboard.com/",
      name: "Dashboard.com",
      image: "https://dashboard.com/static/images/logo_full.svg",
      copyrightYear: 2021,
      author: {
        "@type": "Corporation",
        "@id": "https://dashboard.com/#corporation"
      },
      description:
        "Dashboard est une agence web en ligne qui vous accompagne dans la digitalisation. Réputé pour utiliser les meilleurs outils existant sur le marché. The best way to create something new.",
      publisher: {
        "@type": "Corporation",
        "@id": "https://dashboard.com/#corporation"
      }
    },
    {
      "@type": "Corporation",
      "@id": "https://dashboard.com/#corporation",
      name: "Dashboard.com",
      url: "https://dashboard.com/",
      logo: "https://dashboard.com/static/images/logo_full.svg",
      sameAs: ["https://www.facebook.com/Dashboard/", "https://www.linkedin.com/company/dashboard"],
      address: {
        "@type": "PostalAddress",
        // TODO Update adress when we have one
        streetAddress: "No adress",
        addressLocality: "Strasbourg",
        postalCode: "67000",
        addressCountry: "France"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33782304964",
        contactType: "sales",
        contactOption: "TollFree",
        areaServed: "FR",
        availableLanguage: ["English", "French", "German", "Russian"]
      },
      founders: [
        {
          "@type": "Person",
          name: "Clément MUTH",
          jobTitle: "CTO, CPO"
        },
        {
          "@type": "Person",
          name: "Patrick EIERMANN",
          jobTitle: "CEO, CMO"
        }
      ]
      // duns: xxxxxxx
    }
  ]
};

const JsonLDScript = () => (
  <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} type="application/ld+json" />
);

export default JsonLDScript;
