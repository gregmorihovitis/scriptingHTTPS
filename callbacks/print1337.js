var getHTML = require('../httpScripting5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function obfuscate(password){
   var passwordArray = password.split("");
   var newPassword = "";

   for(var i = 0; i < passwordArray.length; i++){
    switch(passwordArray[i]){
      case "a":
        newPassword += "4";
        break;
      case "e":
        newPassword += "3";
        break;
      case "o":
        newPassword += "0";
        break;
      case "l":
        newPassword += "1";
        break;
      case "s":
        newPassword += "5";
        break;
      default:
        newPassword += passwordArray[i];
    }
   }

   return newPassword;
}

function printHTML (html) {
  console.log(obfuscate(html));
}

getHTML(requestOptions, printHTML);