const mdlinks = require('./index.js');
const path = process.argv[2];

mdlinks(path).then(file => console.log(file));