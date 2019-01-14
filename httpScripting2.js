const https = require('https');

function getAndPrintHTML () {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  let chunks = '';
    https.get(requestOptions, function(response){
    response.setEncoding('utf8');
    response.on('data', function (data) {
      chunks += data;
    });
    response.on('end', function() {
      console.log(chunks);
  });

  });

}

getAndPrintHTML();