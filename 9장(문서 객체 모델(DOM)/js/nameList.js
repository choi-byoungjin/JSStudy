function newRegister(){
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newtext = document.createTextNode(userName.value);
    newP.appendChild(newtext);

    var delBtn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBtn.setAttribute("class", "del");
    delBtn.appendChild(delText);
    newP.appendChild(delBtn);

    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]);
    //nameList.appendChild(newP);
    userName.value = "";

    var removeBtns = document.querySelectorAll(".del");

    for(var i=0; i<removeBtns.length; i++){
        removeBtns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}