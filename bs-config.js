const express = require('express');
const app = express();

const  PORT = process.env.PORT || 3000;

module.exports = {
    port: PORT,
    files: ['./**/*.{html,htm,css,js}'],
    server:{
        baseDir: "./"
    }
};