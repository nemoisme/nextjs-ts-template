// const Koa = require('koa')
// const next = require('next')
// const Router = require('@koa/router')

// const port = parseInt(process.env.PORT, 10) || 3000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   const server = new Koa()
//   const router = new Router()

//   router.get('/a', async (ctx) => {
//     await app.render(ctx.req, ctx.res, '/a', ctx.query)
//     ctx.respond = false
//   })

//   server.use(router.routes())
//   server.listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })