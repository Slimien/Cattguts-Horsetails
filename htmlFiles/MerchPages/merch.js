const stickerIMGSRC = ["merchBilder/Sticker1.jpg", "/Bilder/ArrowDown.png"];
let stickerIMGSRCIndex = 0;

btnswapPicture = document.getElementById("btnswapPicture");
btnswapPicture.addEventListener("click", changePicture)

function changePicture(){
    let StickerBilde="";
    if(window.location.pathname == "/htmlFiles/MerchPages/sticker.html"){
        StickerBilde = document.getElementById("StickerBilde");
        if(stickerIMGSRCIndex == stickerIMGSRC.length-1){
            stickerIMGSRCIndex = 0;
            StickerBilde.src=stickerIMGSRC[stickerIMGSRCIndex];
        }else{
            stickerIMGSRCIndex += 1;
            StickerBilde.src=stickerIMGSRC[stickerIMGSRCIndex];
        }
    }
}