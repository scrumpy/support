module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Learning Agile',
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
                                'introduction',
                            ]
                        },
                        {
                            title: 'Integrations',
                            collapsable: false,
                            children: [
                                'github',
                                'gitlab',
                                'bitbucket',
                                'slack',
                            ]
                        },
                    ],
                },
            },
        },
        nav: [
            {
                text: 'Scrumpy',
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