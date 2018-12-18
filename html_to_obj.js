const Hospital = require('./hospitals')

const rp = require('request-promise');
const $ = require('cheerio');

const url = 'http://192.168.23.14/';

rp(url)
    .then(function (html) {
        //success!
        //success!
        console.log($('table', html).length);
        console.log($('table', html));
    })
    .catch(function (err) {
        //handle error
    });

