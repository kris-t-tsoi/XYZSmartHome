// alert box  to notify marker that it is not implemented
function isImplemented(obj) {
    if (obj.getAttribute("href") == "#") {
        alert("Not Yet Implemented");
    }
}


function powerOnOff() {
    $('#onOffSwitch').change(function () {
        $('$ovenSettings').hide();
    })
}
