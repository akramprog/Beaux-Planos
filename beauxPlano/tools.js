let el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);
document.getElementById("clickMe").onclick = doFunction;
document.getElementById("clickMe").onclick = function(){
    alert("this is the video");
}