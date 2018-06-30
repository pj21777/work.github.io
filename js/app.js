//图片点击缩放设置
$('.item')
    .click(function(){
    $('.item')
        .transition({ scale: 1.1 })
        .delay(100)
        .transition({ scale: 1.0 })
    })
    

$('.main-logo')
    .hover(function(){
    $('.main-logo')
        .transition({ scale: 1.1 })
        .delay(100)
        .transition({ scale: 1.0 })
    })
//不透明过渡设置
$('.logo_container')
    .transition({ opacity: 1},1000);
//丝带导航条下滑设置
$('.ribbon')
    .transition({ y: -100 })
    .transition({ opacity: 1},100)
    .transition({ y: 0 });
//字体特效设置
$('h3')
    .css({ transform: 'scale(0.2)' })
    .transition({ opacity: 1},2000)
    .css({ transform: 'scale(1)' })

