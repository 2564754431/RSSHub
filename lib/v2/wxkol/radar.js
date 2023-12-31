module.exports = {
    'wxkol.com': {
        _name: '微小领',
        '.': [
            {
                title: '微信公众号',
                docs: 'https://docs.rsshub.app/routes/new-media#wei-xiao-ling',
                source: ['/show/:id'],
                target: (params) => `/wxkol/show/${params.id.replace('.html', '')}`,
            },
        ],
    },
};
