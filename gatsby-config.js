module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-140813410-2",
              header: true,
              anonymize: true,
            },
          },
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
                menus: require('./src/data/menus.json'),
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "IoT-Seminaari",
              short_name: "IoT-Seminaari",
              start_url: "/",
              background_color: "#6b37bf",
              theme_color: "#6b37bf",
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: "standalone",
              icon: "static/images/favicon-16x16.png", // This path is relative to the root of the site.
              // An optional attribute which provides support for CORS check.
              // If you do not provide a crossOrigin option, it will skip CORS for manifest.
              // Any invalid keyword or empty string defaults to `anonymous`
              crossOrigin: `use-credentials`,
            },
          },
    ]
};
