//Declare the regexp and new forum base url
var pattern=/(?:https?:\/\/)?(?:(?:www\.|forums\.)?ddo\.com(?:\/[a-z]{2})?)\/showthread\.php\?t=([0-9]+)/img;
var viewtext_base_url = "http://ddo.com/forums/showthread.php/";

//Add the event listener
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var results = pattern.exec(details.url);
        if(results)
        {
            //Redirect to the new forum base url + the post ID
            return {redirectUrl: viewtext_base_url + results[1]};
        }
    },
    {
        urls: [
            "*://ddo.com/*",
            "*://*.ddo.com/*",
        ],
        types: ["main_frame", "sub_frame"]
    },
    ["blocking"]
);