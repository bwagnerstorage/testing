const pw = ["compsci","computer","BWagneriscool","eee","what"];


setInterval(function() { updateStats(); }, 20);

function updateStats() {
  document.getElementById("pain").innerHTML = pw;
}



function testResults(form) {
    var iv1 = form.inputbox1.value;
    var iv2 = form.inputbox2.value;
    var iv3 = form.inputbox3.value;
    var iv4 = form.inputbox4.value;
    var iv5 = form.inputbox5.value;
    
    if(iv1 == pw[0] && iv2 == pw[1] && iv3 == pw[2] && iv4 == pw[3] && iv5 == pw[4]) {
      window.location.href = "test.html";
    }
    else {
      alert ("You are wrong");
    }
}