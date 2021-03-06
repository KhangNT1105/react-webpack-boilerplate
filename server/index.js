require('dotenv').config()
const path = require('path')
const fs = require('fs')
const http = require('http')
const https = require('https')
const open = require('open')
var cors = require('cors')
const privateKey = fs.readFileSync(path.join(__dirname, 'cert', 'server.key'))
const certificate = fs.readFileSync(path.join(__dirname, 'cert', 'server.crt'))

const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const devConfig = require('../webpack.config.development.js')
const prodConfig = require('../webpack.config.build.js')
const express = require('express')
const errorHandler = require('errorhandler')
const notifier = require('node-notifier')
const helmet = require('helmet')
const routes = require('./routes')

const app = express()
const credentials = { key: privateKey, cert: certificate }
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
const { PORT, HTTPS } = process.env

const compiler = webpack(devConfig)
app.use(cors())

const errorNotification = (err, str, req) => {
  const title = 'Error in ' + req.method + ' ' + req.url
  notifier.notify({
    title: title,
    message: str,
  })
}
console.log(IS_DEVELOPMENT)
if (IS_DEVELOPMENT) {
  // only use in development
  app.use(errorHandler({ log: errorNotification }))
  https.globalAgent.options.rejectUnauthorized = false
}
const server =
  HTTPS === 'true'
    ? https.createServer(credentials, app)
    : http.createServer(app)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

app.use((req, res, next) => {
  if (
    /(\.(?!html)\w+$|__webpack.*)/.test(req.url) ||
    req.url.indexOf('.css') > 0
  ) {
  } else {
    req.url = '/' // this would make express-js serve index.html
  }
  next()
})

app.use(
  webpackMiddleware(compiler, {
    stats: 'minimal',
    writeToDisk: false,
    // publicPath: devConfig.output.publicPath,
  })
)
app.use(
  webpackHotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  })
)
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(
//   helmet({
//     contentSecurityPolicy: false,
//   })
// )
server.listen(PORT, async () => {
  console.log(`Server listen to port ${PORT}`)
  let url = HTTPS === 'true' ? 'https://' : 'http://'
  url += `localhost:${PORT || 3000}`
  await open(url)
})
