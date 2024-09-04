let mainContent = document.getElementById("main_content");
let text = mainContent.getElementsByClassName("text")[0];

function changeImg(page) {
    switch(page){
        case 1:
            mainContent.style.backgroundImage = 'url("https://kartinki.pics/uploads/posts/2021-07/thumbs/1625245756_7-kartinkin-com-p-fon-vyazanie-krasivie-foni-7.jpg")';
            text.style.background = "linear-gradient(to right, #191970, #0000FF)";
            text.style.backgroundClip = "text";
            text.style.color = "transparent";
            break;
        case 2:
            mainContent.style.backgroundImage = 'url("https://kartinki.pics/uploads/posts/2021-07/thumbs/1625245678_4-kartinkin-com-p-fon-vyazanie-krasivie-foni-4.jpg")';
            text.style.color = "white";
            break;
        case 3:
            mainContent.style.backgroundImage = 'url("https://kartinki.pics/uploads/posts/2021-07/1625245772_52-kartinkin-com-p-fon-vyazanie-krasivie-foni-65.jpg")';
            text.style.color = "white";
            break;
    }
}