export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '626e4f15299e4526cb69253b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ikuc382z',
                  apiId: 'a749b558-fb8b-4d15-8d82-a2b0c2dc05d3'
                },
                {
                  buildHookId: '626e4f15276ce22b442cf940',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e65k7114',
                  apiId: '17a53893-ca9d-4190-9265-888f2f0ce58e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ysrji/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e65k7114.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
