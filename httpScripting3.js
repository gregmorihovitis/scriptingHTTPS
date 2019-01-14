const https = require('https');

function getAndPrintHTML (options) {
  let chunks = '';

  https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function (data) {
      chunks += data;
    });

    response.on('end', function() {
      console.log(chunks);
    });
  });
}

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);