﻿// alert box  to notify marker that it is not implemented
function isImplemented(obj) {
    if (obj.getAttribute("href") == "#") {
        alert("Not Yet Implemented");
    }
}

//change text in drop down box into selected option
function modeSelect(obj, sel) {
    $(obj).text($(sel).text());
    //append a drop down arrow
    $(obj).append('<span class="caret"></span>');
}

//Confirm that oven has started 
function ovenConfirm() {
        alert("Oven is now cooking");
}