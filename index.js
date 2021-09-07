const fs = require('fs');
const path = require('path');
const mdLinkExtractor = require('markdown-link-extractor');
const filePath = process.argv[2];
let file;

//Corroborar si es archivo o directorio

const isDir = (dir) => {
  try {
    const statsDir = fs.statSync(dir);
    return statsDir.isDirectory();

  } catch (err) {
    //throw new Error('not a directory' + dir);
    console.log(err);
  }
}

const isFile = (file) => {
    const ext = path.extname(file);
    const md = '.md';
    return ext === md;
  }
  //stats = fs.statSync("prueba.md");
  //console.log("Path is file:", stats.isFile());
  //console.log("Path is directory:", stats.isDirectory());

const dirOrFile = (path) => {
  if (isDir(path)) {

    console.log('es un directorio');
  } else if (isFile(path)) {
    file = fs.readFileSync(filePath, 'utf8');
    console.log('Es un archivo');

  }
};


//Devolver links

const extractorLinks = () => {
  dirOrFile(filePath);
  const markdown = file;

  const links = mdLinkExtractor(markdown, false);

  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const linksFilter = links.filter(link => link.match(urlRegex));

  console.log(linksFilter);

  return linksFilter;
}
extractorLinks();




//Devolver archivo en especifico
/*const dircFolder = filePath;
fs.readdir(dircFolder, (err, files) => {
  if (err) {
    return console.log('Error' + err);
  }
  files.forEach(file => {
    console.log(file);
  })
})*/

module.exports = (link) => {
  return new Promise((resolve, reject) => {
    fs.readFile(link, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })

};
module.exports = isFile;
module.exports = extractorLinks;