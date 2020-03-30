/*-----------------当垂直滚动条的垂直距离>400时，显示侧边栏-----------------*/
$(window).scroll(function () {
  if($(window).scrollTop()>=400){
    $(".list-group").css("display","block");
  }else{
    $(".list-group").css("display","none");
  }
})
/*-----------------选中侧边栏设置选中状态-----------------*/
var allItems=$(".list-group-item");
allItems.click(function () {
  $(this).addClass("active");
  allItems.not(this).removeClass("active");
})
/*-----------------根据垂直高度选择侧边连状态-----------------*/

$(window).scroll(function () {//当页面滚动的时候

  $(".col-md-8>div").each(function () {
    var scollTop=$(window).scrollTop();//获取到当前垂直滚动条的距离
    var divTop=$(this).offset().top;//获取到当前div的垂直距离
    if(scollTop>=divTop){
      var index=$(this).index()-1;
      $(allItems[index]).addClass('active');
      allItems.not($(allItems[index])).removeClass('active');
    }

  })

})