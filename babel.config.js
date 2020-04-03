const plugins = []
if (process.env.NODE_ENV === 'production') {
  // Remove console logs from production builds
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins
}
