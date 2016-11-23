module.exports = {
  head: {
    title: "nuxt-hackernews",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: ['~assets/main.css'],
  router: {
    routes: [
      // { path: '/', component: 'pages/_news' },
      // { path: '/news/:page', component: 'pages/_news' },
      // { path: '/user/:id', component: 'pages/_user' },
      // { path: '/item/:id', component: 'pages/_item' }
    ]
  }
}
