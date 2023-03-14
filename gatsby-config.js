require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        // salesChannel: process.env.SHOPIFY_APP_ID, // Optional but recommended
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4slf524lakoz`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-theme-ui",
  ],
};
