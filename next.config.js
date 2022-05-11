module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/hey',
        permanent: true,
      },
    ]
  },
}
