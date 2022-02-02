const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static(__dirname + '/dist/cumi'));


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