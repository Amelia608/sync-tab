module.exports = {
  root: true,
  env: {
    browser: true
  },
  globals: {
    BMap: true,
    BMAP_NORMAL_MAP: true,
    BMAP_HYBRID_MAP: true,
    BMAP_ANCHOR_TOP_LEFT: true,
    BMAP_ANCHOR_TOP_RIGHT: true,
    BMAP_ANCHOR_BOTTOM_RIGHT: true,
    BMAP_NAVIGATION_CONTROL_SMALL: true,
    BMapLib: true,
    Swiper: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
