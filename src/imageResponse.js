const fs = require('fs');

const sponge = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  console.log(request.url);
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(sponge);
  response.end();
};

module.exports.getImage = getImage;
