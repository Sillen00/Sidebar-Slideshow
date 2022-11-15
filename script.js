window.addEventListener("DOMContentLoaded", main);

function main(){
    startBackgroundChangeInterval();
};


function startBackgroundChangeInterval(){
    setInterval(changeImage, 8000);
}

function changeImage(){
    const images = document.querySelectorAll(".container img")
    for (i = 0; i < images.length; i++){
        const img = images[i];
        if (img.classList.contains("visible")){
            img.classList.remove("visible");
            let nextImg;
            if (i === images.length-1){
                i = -1;
            }
            nextImg = images[i+1];
            nextImg.classList.add("visible");
            break;
        }
    }
}



