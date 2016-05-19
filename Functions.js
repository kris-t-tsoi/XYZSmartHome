// alert box  to notify marker that it is not implemented
function isImplemented(obj) {
    if (obj.getAttribute("href") == "#") {
        alert("Not Yet Implemented");
    }
}

function modeSelect(obj, sel) {
    $(obj).text($(sel).text());
    $(obj).text().append('<span class="caret"></span>');
}
