window.addEventListener("DOMContentLoaded", main);

/**Start of the program */
function main(){
    startSlideshow();
};

/**Interval to change image */
function startSlideshow(){
    setInterval(changeImage, 4000);
}

/**Changes between images */
function changeImage(){
    const images = document.querySelectorAll(".container img")
    for (i = 0; i < images.length; i++){
        const currentImage = images[i];
        if (currentImage.classList.contains("visible")){
            currentImage.classList.remove("visible");
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



