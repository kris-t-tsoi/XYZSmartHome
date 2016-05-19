// alert box  to notify marker that it is not implemented
function isImplemented(obj) {
    if (obj.getAttribute("href") == "#") {
        alert("Not Yet Implemented");
    }
}
/*
function modeSelect(obj, sel) {
    alert("butn: "+ '#obj' +"   "+'$(sel).text()');
    ('#obj').val($(sel).text());
}*/

$('#demolist li').on('click', function () {
    alert("in");
    $('#modeSel').val($(this).text());
});