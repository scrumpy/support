module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Scrumpy',
        },
    },
    themeConfig: {
        docsRepo: 'heyscrumpy/learn',
        editLinks: true,
        locales: {
            '/': {
                selectText: 'Language',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                sidebar: {
                    '/': [
                        {
                            title: 'Getting Started',
                            collapsable: false,
                            children: [
                                '',
                            ]
                        },
                        {
                            title: 'Agile',
                            collapsable: false,
                            children: [
                                // 'agile/backlog',
                                'agile/stories',
                                'agile/story-points',
                                // 'agile/epics',
                                // 'agile/sprints',
                            ]
                        },
                        {
                            title: 'Integrations',
                            collapsable: false,
                            children: [
                                'integrations/github',
                                // 'integrations/gitlab',
                                // 'integrations/bitbucket',
                                // 'integrations/slack',
                            ]
                        },
                        // {
                        //     title: 'Import',
                        //     collapsable: false,
                        //     children: [
                        //         'import/excel',
                        //         'import/trello',
                        //         'import/jira',
                        //     ]
                        // },
                    ],
                },
            },
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
                ]
            },
        ],
    },
}