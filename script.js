var atlas = document.getElementsByClassName("atlas")[0];
var imgs = document.getElementsByTagName("img");
var leftB = document.getElementsByClassName("left")[0];
var rightB = document.getElementsByClassName("right")[0];

var deg = 0;

for(var i=0;i<imgs.length;i++){
    imgs[i].onclick = function(){
        deg+=40;
        atlas.style.transform = "translate(-65%,-65%) rotateY(" + deg +   "deg)";
    }
}

leftB.onclick = function(){
    deg-=40;
    atlas.style.transform = "translate(-65%,-65%) rotateY(" + deg +   "deg)";
}
rightB.onclick = function(){
    deg+=40;
    atlas.style.transform = "translate(-65%,-65%) rotateY(" + deg +   "deg)";
}