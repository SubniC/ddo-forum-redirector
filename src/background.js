//Declare the regexps and new forum base url
var pattern_t=/(?:https?:\/\/)?(?:(?:www\.|forums\.)?ddo\.com(?:\/[a-z]{2})?)\/showthread\.php\?t=([0-9]+)/img;
var pattern_p = /(?:https?:\/\/)?(?:(?:www\.|forums\.)?ddo\.com(?:\/[a-z]{2})?)\/show(?:thread|post)\.php\?p=([0-9]+)/img;
var new_url = "http://ddo.com/forums/showthread.php/";

//Add the event listener
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        
        //Try to match the url with the first regexp
        var results = pattern_t.exec(details.url);
        if(results)
        {
            //Redirect to the new forum base url + the post ID
            return {redirectUrl: new_url + results[1]};
        }
        
        //If the url did not match the first regexp we try with the second one
        var results = pattern_p.exec(details.url);
        if(results)
        {
            //Redirect to the new forum base url + the post ID
            return {redirectUrl: new_url + '?p=' + results[1]};
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