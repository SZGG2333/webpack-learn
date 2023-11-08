const express = require('express');
const path = require('path');
const { renderToString } = require('@vue/server-renderer')

const clientManifest = require('./dist/manifest-client.json')
const serverManifest = require('./dist/manifest-server.json')
const serverBundle = path.join(__dirname, './dist', serverManifest['server.js'])

const createApp = require(serverBundle).default

const server = express()

server.get('/', async (req, res) => {
  const app = createApp()

  const html = await renderToString(app)
  const clientBundle = clientManifest['client.js']
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vue SSR</title>
      </head>
      <body>
      <div id="app">${html}</div>
      <script src="${clientBundle}"></script>
      </body>
    </html>
      `
  )
})

server.use(express.static('./dist'))

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})