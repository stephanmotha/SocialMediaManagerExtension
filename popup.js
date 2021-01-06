// FUNCTIONS

function checkAllPlatformsOff() {
    if (localStorage.getItem("youtube") != 'on' && localStorage.getItem("twitch") != 'on' && localStorage.getItem("github") != 'on' && localStorage.getItem("twitter") != 'on' && localStorage.getItem("whatsapp") != 'on' && localStorage.getItem("instagram") != 'on' && localStorage.getItem("reddit") != 'on' && localStorage.getItem("facebook") != 'on' && localStorage.getItem("linkedin") != 'on') {
        addToRow("temp-prompt");
    }
}

function addToRow(template) {
    var temp = document.getElementById(template).content;
    //console.log(temp)
    // var copy = document.importNode(temp, true);
    document.getElementById('row').appendChild(temp);
}


function checkLocalStorage(platform) {
    if (localStorage.getItem(platform) == "on") {
        addToRow("temp-".concat(platform));
    }
}


// FUNCTION CALLS
platforms = ["youtube", "facebook", "instagram", "twitter", "reddit", "whatsapp", "github", "twitch", "linkedin"]


for (platform of platforms) {
    checkLocalStorage(platform)
}



if (localStorage.getItem("mode") == "dark") {
    $('#main, p').toggleClass('dark-mode', true);
    $('.fa-github').toggleClass('git-change', true);
    $('.fa-twitch').toggleClass('twitch-change', true);
    $('.fa-facebook-square').toggleClass('facebook-change', true);
    $('.title').toggleClass('name-change', true);
    // document.getElementById('settings').classList.remove('badge-dark');
    // document.getElementById('settings').classList.add('badge-light');

}
else if (localStorage.getItem("mode") == "light") {
    $('#main, p').toggleClass('dark-mode', false);
    $('.fa-github').toggleClass('git-change', false);
    $('.fa-github').toggleClass('git-change', false);
    $('.fa-facebook-square').toggleClass('facebook-change', false);
    // document.getElementById('settings').classList.remove('badge-light');
    // document.getElementById('settings').classList.add('badge-dark');


}

checkAllPlatformsOff();