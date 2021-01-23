document.querySelector('#div').onmousemove = function(event){
event = event || window.event;
console.log(event);

var h = document.getElementById('div2').offsetHeight;
var h2 = document.getElementById('div2').offsetWidth;

document.querySelector('#offx').innerHTML = event.offsetX;
document.querySelector('#offy').innerHTML = event.offsetY;

document.querySelector('#div').style.backgroundPositionX= h  * 0.5  - event.offsetX +'px';
document.querySelector('#div').style.backgroundPositionY= h2 * 0.5 - event.offsetY +'px';
document.querySelector('#div').style.transform= 'scale(2)';
}
document.querySelector('#div').onmouseout = function(event){
    event = event || window.event;
    console.log(event);
    document.querySelector('#div').style.backgroundPositionX='0px';
    document.querySelector('#div').style.backgroundPositionY='0px';
    document.querySelector('#div').style.transform= 'scale(1)';
    }