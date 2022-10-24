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

var view = document.querySelector("#view");
view.addEventListener("click", function(){
    if(isOpen == false){
        document.querySelector("#detail").style.display = "block";
        view.innerHTML = "상세 설명 닫기";
        isOpen = true;
    }
    else{
        document.querySelector("#detail").style.display = "none";
        view.innerHTML = "상세 설명 닫기";
        isOpen = false;
    }
});