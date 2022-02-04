const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static(__dirname + '/dist/cumi'));

// We need express for Heroku deployment
// BECAUSE ng serve was not able to read the environment variable $PORT and was always running server on PORT 4200
// /////
// express uses process.env.port to figure the PORT
// Now express server is serving HTML & JS files build via ng build at folder /dist/cumi
///
// Using express as a proxy server to access backend


// Proxy endpoints
app.use('/pipe', createProxyMiddleware({
    target: process.env.API_SERVER || 'http://localhost:9092',
    changeOrigin: true,
    pathRewrite: {
        [`^/pipe/auth`]: '/auth',
        [`^/pipe/api`]: '/api',
    },
}));


app.listen(process.env.PORT || 8080);