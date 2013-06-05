var pattern=/(?:https?:\/\/)?www\.ddo\.com\/en\/showthread\.php\?t=([0-9]+)/img;
var viewtext_base_url = "http://ddo.com/forums/showthread.php/";
var newurl;
//console.log(window.location.href);
var results = pattern.exec(window.location.href);
if(results)
{
  //console.log(results);
  newurl = viewtext_base_url + results[1];
  chrome.extension.sendRequest({redirect: newurl}); // send message to redirect 
}
//else
//{
//  console.log('no es una url del forum del DDO');
//}