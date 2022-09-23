

const https = require('https');

const request = (url) => new Promise((r) => {
    https.get(url, (e) => { let d = ''; e.on('data', (c) => { d += c; }); e.on('end', () => r(d)) });
})

;(async () => {
    const url = 'https://raw.githubusercontent.com/LiveDuo/remote-dependency-node/master/bencode.js'
    const response = await request(url)
    const {encode, decode} = Function(response)()

    const data = { string: 'Hello World', integer: 12345 }
    const encoded = encode(data).toString('utf8')
    const decoded = decode(encoded)
    console.log('encoded', encoded)
    console.log('decoded', decoded)
})()
