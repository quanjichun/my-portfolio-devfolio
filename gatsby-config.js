module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://phantom-assassin-portfolio/quanjichun`,
    // Your Name
    name: '전기춘',
    // Main Site Title
    title: `Jichun Quan | Front-end Developer`,
    // Description that goes under your name in main bio
    description: `A javascript developer specialized on front-end and tring to be a full-stack developer`,
    // Optional: Github account URL
    github: `https://github.com/quanjichun`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: ``,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS \n \
          A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS \
          A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS \
          A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: '',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'LG 전자',
        description: 'ID SAT팀, App 개발자, 2014.07 ~ 현재'
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, React, Redux, GraphQL, Koa, Python, Sequelize, Java',
      },
      {
        name: 'Other',
        description:
          'Elasticsearch, Git, Agile / Scrum, MySQL',
      },
      {
        name: 'Language',
        description: 'Chinese'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
