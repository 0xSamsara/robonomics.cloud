// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Robonomics Cloud',
  siteDescription: '',
  siteUrl: 'https://robonomics.cloud',

  titleTemplate: '%s',
  plugins: [
    {
      use: "gridsome-plugin-google-sheets-post",
    },
    // {
    //   use: 'gridsome-plugin-twitter-pixel',
    //   options: {
    //     id: 'tw-o0lc5-oejsq'
    //   }
    // },
  ],

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
