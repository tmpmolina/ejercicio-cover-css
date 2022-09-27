const vinylRecordEdit = document.getElementsByClassName("vinyl-record-edit");
const caratulaEdit = document.getElementsByClassName("caratula-edit java-reference");
const discoEdit = document.getElementsByClassName("disco-edit java-reference");

var debounc = false
function changeBackground(color) {
    if (debounc) {
        caratulaEdit[0].style.right = "215px"
        discoEdit[0].style.right = "2px"
        debounc = false
    }
    else {
        caratulaEdit[0].style.right = "130px"
        discoEdit[0].style.right = "130px"
        debounc = true
    }
    // console.log()
}

vinylRecordEdit[0].addEventListener("click", function () { changeBackground() });
