var post = 0;
function postFunction() {
    var text = document.getElementById("text1").value;
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2");
    if (post==0){
        post1.innerHTML = text ;
    }
    else if (post==1){
        reply1.innerHTML = text;
    }
    else {
    reply2.innerHTML = text ;
    }
    post++;
    document.getElementById("text1").value="";
}
function clearFunction(){
    post = 0 ;
    var post1 = document.getElementById("post1");
    post1.innerHTML = "";
    var reply1 = document.getElementById("reply1");
    reply1.innerHTML = "";
    var reply2 = document.getElementById("reply2");
    reply2.innerHTML = "";
}