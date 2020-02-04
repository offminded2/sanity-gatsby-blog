export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e39a98517a94777460f8c0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3dh4f6qp',
                  apiId: '26daa402-a210-4021-8778-1c369e9de05e'
                },
                {
                  buildHookId: '5e39a98618297ecea035af52',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6avtap9y',
                  apiId: '9a335b94-2565-48c9-a1b2-66025857f62e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/offminded2/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6avtap9y.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
