
//FUNCTIONS

function updateToggles(platform) {

    if (localStorage.getItem("color-".concat(platform)) == "blue") {
        $('#'.concat(platform, '-switch')).prop("checked", true)

    } else {
        $('#'.concat(platform, '-switch')).prop("checked", false)
    }
}



function modifyPlatformStorage(event) { //pass the even as a argument

    var id = event.srcElement.id; // get the id of the clicked element
    var platform = (id.slice(0, id.indexOf("-"))); //convert the id to platform name


    if (localStorage.getItem(platform) == "on") {
        localStorage.setItem(platform, "off");
    }
    else {
        localStorage.setItem(platform, "on");
    }


    if (localStorage.getItem("color-".concat(platform)) == "blue") {
        localStorage.setItem("color-".concat(platform), "gray");
    }
    else {
        localStorage.setItem("color-".concat(platform), "blue");
    }

}

function modifyModeStorage() {
    if (localStorage.getItem("mode") == "dark") {
        localStorage.setItem("mode", "light");

    }
    else {
        localStorage.setItem("mode", "dark");

    }
    updateMode();

}


function updateMode() {
    console.log()
    if (localStorage.getItem("mode") == "dark") {
        $('#mode-switch').text('Light Mode')
        $('#main, p').toggleClass('dark-mode', true);

    } else {
        $('#mode-switch').text('Dark Mode')
        $('#main, p').toggleClass('dark-mode', false);
    }



}


// ONCLICK EVENTS

document.getElementById('youtube-switch').addEventListener("click", modifyPlatformStorage);
document.getElementById('facebook-switch').addEventListener("click", modifyPlatformStorage);
document.getElementById('instagram-switch').addEventListener("click", modifyPlatformStorage);
document.getElementById('twitter-switch').addEventListener("click", modifyPlatformStorage);
document.getElementById('reddit-switch').addEventListener("click", modifyPlatformStorage);
document.getElementById('whatsapp-switch').addEventListener("click", modifyPlatformStorage);
document.getElementById('github-switch').addEventListener("click", modifyPlatformStorage);
document.getElementById('twitch-switch').addEventListener("click", modifyPlatformStorage);

document.getElementById('mode-switch').addEventListener("click", modifyModeStorage);




//FUNCTION CALLS
platforms = ['youtube', 'facebook', 'instagram', 'twitter', 'reddit', 'whatsapp', 'github', 'twitch']

var i;
for (i = 0; i < platforms.length; i++) {
    updateToggles(platforms[i]);

}
// updateToggles("youtube");
// updateToggles("facebook");
// updateToggles("twitch");
// updateToggles("whatsapp");
// updateToggles("github");
// updateToggles("reddit");
// updateToggles("twitter");
// updateToggles("instagram");

updateMode();








