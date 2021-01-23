/*function init() {
    if (document.layers) document.captureEvents(Event.MOUSEMOVE);
    document.onmousemove = mousemove;
}
function mousemove(event) {
    var mouse_x = mouse_y = 0;
    if (document.attachEvent != null) {
        mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    }
    status ='<div class="div" id="xy"><img style="object-fit:cover;transform: scale(3) translate('+ mouse_x +'px, '+mouse_y+'px);height:50px ;width: 50px; " src="123.png" alt=""  ></div>';
 //   document.getElementById('xy').innerHTML = "x = " + mouse_x + ", y = " + mouse_y;
 //   document.getElementById('xy').style.translate = mouse_x+'px,'+mouse_y+'px'; 

document.getElementById('xy').outerHTML= '<div class="div" id="xy"><img style="object-fit:cover;transform: scale(3) translate('+ mouse_x +'px, '+mouse_y+'px);height:50px ;width: 50px; " src="123.png" alt=""  ></div>';
}
init()*/
$('.div').mousemove(function(e){
    var x = e.pageX;
    var y = e.pageY;
    $(".xy").attr('style', 'transform: scale(3) translate('+ x +'px, '+y+'px);');});

  $('#coords').text(x + '/' + y);
});