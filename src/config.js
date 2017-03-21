module.exports = {
  port: process.env.PORT || '5000',
  recast: {
    token: process.env.RECAST_TOKEN || '42d8f54613bbc12eb818baf0e3b5c3a2',
    language: process.env.RECAST_LANGUAGE || 'en',
  },
}
