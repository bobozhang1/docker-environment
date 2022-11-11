import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '狂奔的蜗牛',
    description: '美好从这一刻开始',
    base: 'docker-environment/',
    head: [['link', { rel: 'icon', href: '/docker-environment/images/logo.png' }]],
    theme: defaultTheme({
        logo: 'images/logo.png',
        navbar: [
            // NavbarItem
            {
                text: '开发规范',
                link: '/specification/'
            },
            // NavbarGroup
            {
                text: '数据库',
                children: [{
                    text: 'MYSQL',
                    link: '/database/mysql.md',
                    activeMatch: '/',
                }, {
                    text: 'REDIS',
                    link: '/database/redis.md',
                    activeMatch: '/',
                }],
            },
        ],
    }),

})