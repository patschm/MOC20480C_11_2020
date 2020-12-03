(function ()
{
    window.applicationCache.addEventListener("checking", function (e) { document.log("Checking the application cache for updates"); }, false);
    window.applicationCache.addEventListener("downloading", function (e) { document.log("start downloading resources to the application cache"); }, false);
    window.applicationCache.addEventListener("updateready", function (e) { document.log("New resource version has been downloaded"); }, false);
    window.applicationCache.addEventListener("obsolete", function (e) { document.log("manifest file is on longer available"); }, false);
    window.applicationCache.addEventListener("error", function (e) { document.log("error while downloading resources"); }, false);
    window.applicationCache.addEventListener("noupdate", function (e) { document.log("no changes found after manifest update"); }, false);
    window.applicationCache.addEventListener("progress", function (e) { document.log(e + " downloaded"); }, false);

})();

