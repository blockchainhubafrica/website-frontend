import { DefaultSeo, NextSeo } from "next-seo";

function DefaultSEOHead() {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_gb",
          url: "https://blockchainhub.africa",
          site_name: "Blockchain Hub Africa",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://blockchainhub.africa/favicon.svg",
            type: "image/x-icon",
          },
          {
            rel: "apple-touch-icon",
            href: "https://blockchainhub.africa/apple-touch-icon-iphone-60x60.png",
            sizes: "60x60",
          },
          {
            rel: "apple-touch-icon",
            href: "https://blockchainhub.africa/apple-touch-icon-ipad-76x76.png",
            sizes: "76x76",
          },
          {
            rel: "apple-touch-icon",
            href: "https://blockchainhub.africa/apple-touch-icon-ipad-retina-152x152.png",
            sizes: "144x144",
          },
          {
            rel: "apple-touch-icon",
            href: "https://blockchainhub.africa/apple-touch-icon-iphone-retina-120x120.png",
            sizes: "114x114",
          },
          // {
          //   rel: "manifest",
          //   href: "/manifest.json",
          // },
        ]}
        additionalMetaTags={[
          // {
          //   name: "google-site-verification",
          //   content: "phFfK9UcYyyYuCIeZqgoV_WzfMu9ZgPHnC0V51--fEA",
          // },
          {
            name: "keywords",
            content:
              "Blockchain Hub Africa, Blockchain, Smart Contract, Africa, Talent, Cryptocurrency",
          },
          {
            name: "theme-color",
            content: "#FFFFFF",
          },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ]}
      />
    </>
  );
}

{
  /* <script type='application/ld+json'> 
{
  "@context": "http://www.schema.org",
  "@type": "WebSite",
  "name": "Blockchain Hub Africa",
  "alternateName": "Blockchain Hub Africa",
  "url": "blockchainhub.africa"
}
 </script> */
}

export { DefaultSEOHead };
