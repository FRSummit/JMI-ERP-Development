export default {
  debug: true,
  testing: true,
  auth0: {
    base: 'localhost:8081',
    clientId: 't2EnCZzuuyoQsCPPt84djJ005zz9utwq',
    domain: 'dev-nuzfq563.au.auth0.com',
    audience: "http://35.201.0.39/",
    returnTo: 'http://localhost:8081'
  },
  // apiBaseUrl: "http://192.168.10.34:3001"
  baseURL: "http://localhost:8081",
  // baseURL: "http://203.188.246.138:8887",
  apiBaseUrl: "http://203.188.246.138:8885",
  // apiBaseUrl: "http://192.168.10.76:8000",
  apiBaseUrlFRS: "http://frs-json-server.herokuapp.com",
  printOption: {
    name: "_blank",
    specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
    styles: [
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
      "https://unpkg.com/kidlat-css/css/kidlat.css",
      "http://localhost:8081/print.css",
    ],
  }
};