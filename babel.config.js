// const prodPlugins = process.env.NODE_ENV === 'production' ? ['transform-remove-console'] : []

module.exports = {
  presets: [
    '@vue/app'
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
}