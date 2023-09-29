const siteAddress = process.env.NEXT_PUBLIC_SITE_ADDRESS || "http://ariful.io/";

export const siteConfig = {
  name: "Ariful",
  url: siteAddress,
  ogImage: `${siteAddress}/opengraph-image`,
  description:
    "Passionate senior frontend engineer specializing in JavaScript, React.js, Next.js, and Node.js. Transforming ideas into seamless, user-centric experiences. Let's build the future together.",
  links: {
    github: "https://github.com/arifulbgt4",
  },
};
