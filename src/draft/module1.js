 var querystrint = require('querystring');
 var html = $.ajax({
  url: "../index.json",
  async: false
 }).responseText;
var newobj=querystring.parse(html);
 console.log(html);