var fs = require('fs');

module.exports = {
  writeSectionHeader: (country, fileName, title, subheader) => {
    // Read file
    fs.readFile(fileName, 'utf8', (err, data) => {
      // if file doesnt exist
      if (err) {
        // write the file
        // fs.writeFile(fileName)

      }
      // else append the file
    })
  }
}