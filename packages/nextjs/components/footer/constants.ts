export const itemsFooter = (t) => {
  return [
    {
      label: t("footerFeatures"),
      dataAzinoveId: "footerFeatures",
      items: [
        {
          value: t("footerAnalytic"),
          href: "/features",
          dataAzinoveId: "footerAnalytic"
        },
        {
          value: t("footerSeo"),
          href: "/features",
          dataAzinoveId: "footerSeo"
        },
        {
          value: t("footerAds"),
          href: "/features",
          dataAzinoveId: "footerAds"
        },
        {
          value: t("footerSearchEngine"),
          href: "/features",
          dataAzinoveId: "footerSearchEngine"
        },
        {
          value: t("footerGoogleBusiness"),
          href: "/features",
          dataAzinoveId: "footerGoogleBusiness"
        },
        {
          value: t("footerHosting"),
          href: "/features",
          dataAzinoveId: "footerHosting"
        }
      ]
    },
    {
      label: t("footerPricing"),
      items: [
        {
          value: t("footerEdition"),
          href: "/pricing",
          dataAzinoveId: "footerEdition"
        }
      ]
    },
    {
      label: t("footerResources"),
      items: [
        {
          value: t("footerSecurity"),
          href: "/security",
          dataAzinoveId: "footerSecurity"
        },
        {
          value: t("footerQuestions"),
          href: "/faq",
          dataAzinoveId: "footerQuestions"
        },
        {
          value: t("footerDev"),
          href: "/developer",
          dataAzinoveId: "footerDev"
        }
      ]
    }
  ];
};
