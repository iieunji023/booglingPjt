// // import { createProxyMiddleware } from 'http-proxy-middleware';
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?',
//       pathRewrite: {
//         '^/api': '',
//       },
//     }),
//   );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api',{
      target: 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    })
  );
};