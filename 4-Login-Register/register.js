
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var x = document.forms["myForm"]["password1"].value;
    var y = document.forms["myForm"]["password2"].value;
    if (x==y){
    alert("Correct!");
    return true;
    }
    else {
    var error = document.getElementById("errormsg");
    error.innerHTML= "Please check your Information!";
    return false;
    }
}