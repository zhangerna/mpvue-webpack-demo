

module.exports = {
  dev: {
    env: {
      NODE_ENV: '"development"',
      BASE_URL: '"http://localhost:8081"',
    },
    publicPath: "/"
  },
  build: {
    env: {
      NODE_ENV: '"production"',
      BASE_URL: '"http://localhost:8081"',
    },
    publicPath: "./"
  }

};
