let outer = document.getElementsByClassName('outer')[0];
let middle = document.getElementsByClassName('middle')[0];
let inner1 = document.getElementsByClassName('inner1')[0];
let inner2 = document.getElementsByClassName('inner2')[0];


let capture = {
    capture : true
};
let noneCapture =  {
    capture : false
};
let once = {
    once : true
};
let noneOnce = {
    once : false
};
let passive = {
    passive : true
};
let nonePassive = {
    passive : false
};

outer.addEventListener('click', onceHandler, once);
outer.addEventListener('click', noneOnceHandler, noneOnce);
middle.addEventListener('click', captureHandler, capture);
middle.addEventListener('click', noneCaptureHandler, noneCapture);
inner1.addEventListener('click', passiveHandler, passive);
inner2.addEventListener('click', nonePassiveHandler, nonePassive);

function onceHandler(event)
{
    alert('outer, once');
}
function noneOnceHandler(event)
{
    alert('outer, none-once, default');
}
function captureHandler(event)
{
    //event.stopImmediatePropagation();
    alert('middle, capture');
}
function noneCaptureHandler(event)
{
    alert('middle, none-capture, default');
}
function passiveHandler(event)
{
    // Unable to preventDefault inside passive event listener invocation.
    event.preventDefault();
    alert('inner1, passive, open new page');
}
function nonePassiveHandler(event)
{
    event.preventDefault();
    //event.stopPropagation();
    alert('inner2, none-passive, default, not open new page');
}