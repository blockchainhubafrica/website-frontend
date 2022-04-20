import { DefaultSeo, NextSeo } from "next-seo";

function DefaultSEOHead() {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_gb",
          url: "https://blockchainhub.africa",
          images: [
            {
              url: "https://res.cloudinary.com/blockchainhub-africa/image/upload/v1650293106/Company-website/bcha_logo_dark_pzqxcl.jpg",
              width: 320,
              height: 320,
              alt: "Blockchain Hub Africa",
            },
          ],
          site_name: "Blockchain Hub Africa",
        }}
        additionalLinkTags={
          [
            // {
            //   rel: "icon",
            //   href: "https://blockchainhub.africa/favicon.ico",
            //   type: "image/x-icon",
            // },
            // {
            //   rel: "apple-touch-icon",
            //   href: "https://blockchainhub.africa/apple-touch-icon-76.png",
            //   sizes: "76x76",
            // },
            // {
            //   rel: "apple-touch-icon",
            //   href: "https://blockchainhub.africa/apple-touch-icon-156.png",
            //   sizes: "156x156",
            // },
            // {
            //   rel: "manifest",
            //   href: "/manifest.json",
            // },
          ]
        }
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
