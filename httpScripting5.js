https = require('https')

module.exports =  function getHTML (options, callback) {
  let chunks = '';

  https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function (data) {
      callback(data);
    });
  });
}
