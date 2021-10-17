const CracoLessPlugin = require('craco-less')
const colorVars = require('./src/config/color')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: colorVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
