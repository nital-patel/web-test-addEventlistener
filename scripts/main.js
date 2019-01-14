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