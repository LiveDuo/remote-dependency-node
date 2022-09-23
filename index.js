

const https = require('https');

const request = (url) => new Promise((r) => {
    https.get(url, (e) => { let d = ''; e.on('data', (c) => { d += c; }); e.on('end', () => r(d)) });
})

;(async () => {
    const url = 'https://raw.githubusercontent.com/LiveDuo/remote-dependency-node/master/dependency.js'
    const response = await request(url)
    Function(response)()
})()
