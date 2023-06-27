let btnThePlagueLyric = document.getElementById("btn-ThePlagueLyrics");
if(btnThePlagueLyric!=null){btnThePlagueLyric.addEventListener("click", ShowLyrics)}
let btnFridayFunLyrics = document.getElementById("btn-FridayFunLyrics");
if(btnFridayFunLyrics!=null){btnFridayFunLyrics.addEventListener("click", ShowLyrics)}
let btnAnnePedersdotterLyrics = document.getElementById("btn-AnnePedersdotterLyrics");
if(btnAnnePedersdotterLyrics!=null){btnAnnePedersdotterLyrics.addEventListener("click", ShowLyrics)}
let btnGREETINGSFROMKRAMPUSLyrics = document.getElementById("btn-GREETINGSFROMKRAMPUSLyrics");
if(btnGREETINGSFROMKRAMPUSLyrics!=null){btnGREETINGSFROMKRAMPUSLyrics.addEventListener("click", ShowLyrics)}
let btnWelovemenLyrics = document.getElementById("btn-WelovemenLyrics");
if(btnWelovemenLyrics!=null){btnWelovemenLyrics.addEventListener("click", ShowLyrics)}
let btnVirginiaLeeLyrics = document.getElementById("btn-VirginiaLeeLyrics");
if(btnVirginiaLeeLyrics!=null){btnVirginiaLeeLyrics.addEventListener("click", ShowLyrics)}

function ShowLyrics(e){
    let lyric = document.getElementById(e.target.id.replaceAll('btn-', '').replaceAll('-img', ''))
    let image = document.getElementById(e.target.id.replaceAll('-img', '') + "-img")
    if(lyric.hidden == true){
        lyric.hidden = false;
        image.style.rotate = "90deg"
    }else{
        lyric.hidden =true;
        image.style.rotate = "0deg"
    }
}

let sticker = document.getElementById("sticker");
if(sticker!=null){sticker.addEventListener("click", merchItemPage);}
let Mug = document.getElementById("Mug");
if(Mug!=null){Mug.addEventListener("click", merchItemPage);}

function merchItemPage(e){
    let merchItem = e.target.parentElement.id;
    if(e.target.parentElement.id == "merchContainer"){
        merchItem = e.target.id;
    }
    let pageLocation = "/htmlFiles/MerchPages/" + merchItem + ".html";
    location.href = pageLocation;
}