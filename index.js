const fs = require('fs');
const path = require('path');
const mdLinkExtractor = require('markdown-link-extractor');
const filePath = 'C:/Users/Tere/Desktop/laboratoria/SCL017-md-link/prueba.md'
const file = fs.readFileSync(filePath, 'utf8');

//Corroborar si es archivo o directorio
stats = fs.statSync("prueba.md");
console.log("Path is file:", stats.isFile());
console.log("Path is directory:", stats.isDirectory());


//Devolver links


const markdown = file;
try {
  const links = mdLinkExtractor(markdown, false);


  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const linksFilter = links.filter(link => link.match(urlRegex));
  console.log(linksFilter);


  const details = mdLinkExtractor(markdown, true);
  console.log(details);
  //details.forEach(detail => console.log(detail));
  // const detailsFilter = details.filter(detail => detail == linksFilter);
  //console.log(detailsFilter);
  //OLA DIOS SOY IO DE NUEVO

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