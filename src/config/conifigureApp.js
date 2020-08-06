import config from './'

const configureApp = () => {
  // replace app name in document dynamically from config
  const metas = document.getElementsByTagName('meta')
  const descriptionMeta = metas.namedItem('description')

  if (descriptionMeta) {
    descriptionMeta.content = config.appName
  }

  document.title = config.appName

  // this actually isn't working without ejecting
  // the react app - not going to bother with the
  // dynamic creation of the manifest for now
  // create manifest for webapp
  // const manifest = {
  //   "short_name": config.appName,
  //   "name": config.appName,
  //   "icons": [
  //     {
  //       "src": faviconPath,
  //       "sizes": "64x64 32x32 24x24 16x16",
  //       "type": "image/x-icon"
  //     },
  //     {
  //       "src": logo192Path,
  //       "type": "image/png",
  //       "sizes": "192x192"
  //     },
  //     {
  //       "src": logo512Path,
  //       "type": "image/png",
  //       "sizes": "512x512"
  //     }
  //   ],
  //   "display": "standalone",
  //   "theme_color": "#000000",
  //   "background_color": "#ffffff"
  // }

  // const stringManifest = JSON.stringify(manifest)
  // const blob = new Blob([stringManifest], { type: 'application/json' })
  // const manifestURL = URL.createObjectURL(blob)
  // document.querySelector('#manifest-placeholder').setAttribute('href', manifestURL)
}

export default configureApp
