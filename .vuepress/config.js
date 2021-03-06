module.exports = {
    lang: 'en-US',
    title: 'Scrumpy',
    themeConfig: {
        docsRepo: 'scrumpy/support',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        search: true,
        sidebar: {
            '/': [
                {
                    title: 'Getting Started',
                    collapsable: false,
                    children: [
                        'getting-started/sign-up',
                        'getting-started/onboarding',
                        'getting-started/pricing',
                    ]
                },
                {
                    title: 'Working Agile',
                    collapsable: false,
                    children: [
                        'agile/overview',
                        'agile/kanban',
                        'agile/scrum',
                        'agile/backlog',
                        'agile/sprints',
                        'agile/stories',
                        'agile/story-points',
                    ]
                },
                {
                    title: 'Integrations',
                    collapsable: false,
                    children: [
                        'integrations/github',
                        'integrations/gitlab',
                        'integrations/slack',
                        'integrations/helpscout',
                    ]
                },
                {
                    title: 'About',
                    collapsable: false,
                    children: [
                        'about/values',
                        'about/team',
                        'about/jobs',
                        'about/press',
                    ]
                },
            ],
        },
        nav: [
            {
                text: 'Links',
                items: [
                    { text: 'Sign In', link: 'https://app.scrumpy.io/' },
                    { text: 'Download Apps', link: 'https://scrumpy.io/apps' },
                    { text: 'Changelog', link: 'https://scrumpy.io/changelog' },
                    { text: 'Site Notice', link: 'https://scrumpy.io/imprint' },
                    { text: 'Blog', link: 'https://medium.com/scrumpy' },
                    { text: 'Twitter', link: 'https://twitter.com/heyscrumpy' },
                ]
            },
        ],
    },
}
