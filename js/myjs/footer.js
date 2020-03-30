/*------------------图片切换---------------------*/
var alImg=$(".allA img");
var src,subSrc;
alImg.hover(function () {//鼠标移入时
  src=this.getAttribute("src");
  subSrc=src.slice(0,-3);
  this.setAttribute("src",subSrc+"jpg");
},function () {//鼠标移出时
  this.setAttribute("src",subSrc+"png");
})


