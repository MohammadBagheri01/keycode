function _id(id) {
    let elem=document.getElementById(id);
    return elem;
}
let startTxtElm = _id("start-txt");
let infoSectionElm =_id("info-section");
let keyCodeElm =_id("key-code");
let eventKeyElm =_id("event-key");
let eventLocationElm =_id("event-location");
let eventWhichElm =_id("event-which");
let eventCodeElm =_id("event-code");

document.body.addEventListener("keydown",function(event){
    event.preventDefault()
    startTxtElm.style.display="none";
    infoSectionElm.style.display="flex";
    keyCodeElm.innerHTML=event.keyCode;
    eventKeyElm.innerHTML=event.key;
    eventLocationElm.innerHTML=event.location;
    eventWhichElm.innerHTML=event.which;
    eventCodeElm.innerHTML=event.code;
})