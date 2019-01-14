let https = require('https');

function getPrintHTMLChunks(){
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log('Chunk Received:', data, "\n");
    });
  });
}

getPrintHTMLChunks();