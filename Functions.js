// alert box  to notify marker that it is not implemented
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


function pickTime(obj) {
    //alert($(obj).attr('id'));
    $($(obj).attr('id')).datetimepicker({
        format: 'LT'
    });
}
