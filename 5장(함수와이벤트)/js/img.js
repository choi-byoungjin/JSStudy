$(document).ready(function(){
    init();
    initEvent();
});

var $images = null;

function init(){
    $images = $("#container1 img");
}

function initEvent() {
    $("#btnStart").click(function(){
        showImage();
    });
}

function showImage(){
    var length = $images.length;

    for(var i=0; i<length; i++){
        var $img = $images.eq(i);
        var x = 100 + ((i % 3) * 200);
        var y = 100 + (parseInt(i / 3) * 200);

        $img.css({
            left : x, 
            top : y
        });
    }
}