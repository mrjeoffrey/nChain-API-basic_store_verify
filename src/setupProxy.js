const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://nchainplatform.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Strip '/api' from the path
      },
    })
  );
};
