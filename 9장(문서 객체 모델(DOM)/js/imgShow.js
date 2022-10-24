var bigPic = document.querySelector("#cup");
var smallPic = document.querySelectorAll(".small");
var cup = document.querySelector("#cup");
var isOpen = false;

for(var i=0; i<smallPic.length; i++){
    smallPic[i].addEventListener("click", changePic);
}
function changePic() {
    var newPic = this.src;
    bigPic.setAttribute("src", newPic);
    //cup.src = newPic;
}