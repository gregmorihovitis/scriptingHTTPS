const https = require('https');

function getHTML (options, callback) {
let chunks = '';

  https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function (data) {
      callback(data);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);