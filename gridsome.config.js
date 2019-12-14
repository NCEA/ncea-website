// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'NCEA',
  siteDescription: 'Formed in 1991 with the objective of providing a high standard of Christian Education in local state high schools.',

  templates: {
    Post: '/news/:title'
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Index',
        path: 'content/index.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'About',
        path: 'content/about.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Contact',
        path: 'content/contact.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'News',
        path: 'content/news.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md'
      }
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
