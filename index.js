const fs = require('fs');
const path = require('path');
const mdLinkExtractor = require('markdown-link-extractor');
const filePath = 'C:/Users/Tere/Desktop/laboratoria/SCL017-md-link/README.md'
const file = fs.readFileSync(filePath, 'utf8');

//Corroborar si es archivo o directorio
stats = fs.statSync("README.md");
console.log("Path is file:", stats.isFile());
console.log("Path is directory:", stats.isDirectory());


//Devolver links
const markdown = file;
try {
  const links = mdLinkExtractor(markdown, false);
  links.forEach(link => console.log(link));
  const details = mdLinkExtractor(markdown, true);
  details.forEach(detail => console.log(detail));
} catch (err) {
  console.log(err);
}




//Devolver archivo en especifico
const dircFolder = 'C:/Users/Tere/Desktop/laboratoria/SCL017-md-link/pruebas';
fs.readdir(dircFolder, (err, files) => {
  if (err) {
    return console.log('Error' + err);
  }
  files.forEach(file => {
    console.log(file);
  })
})

module.exports = (link) => {
  return new Promise((resolve, reject) => {
    fs.readFile(link, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })

};