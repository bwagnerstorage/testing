var pw = [1,2,3,4,5];

for (let i = 0; i < pw.length; i++) {
  pw[i] += 1;
Math.pow(pw[i],4);
Math.sin(pw[i]);
Math.floor(pw[i]);

  pw.unshift("tet");
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



function updateStats() {
  document.getElementById("pain").innerHTML = pw;
}