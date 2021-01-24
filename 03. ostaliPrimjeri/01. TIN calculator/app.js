function izracun() {
    var godina = document.getElementById("godina").value; // Zadnje dvije brojke
    if (godina.length > 2) {
      godina = godina.substring(2);
      if (godina == 00) {
        godina = "2" + godina;
      }
    }
    var mjesec = document.getElementById("mjesec").value; //    Mjesec rođenja - ako je mjesec manji od 10 unosi se bez vodeće 0
    if (mjesec < 10) {
      mjesec = "0" + mjesec;
    }
    var dan = document.getElementById("dan").value; // Dan rođenja
  
    var sex = document.getElementsByName("gender");
    for (var i = 0; i < sex.length; i++) {
      if (sex[i].checked) {
        var spol = sex[i].value;
        break;
      }
    }
    // doraditi provjeru jesu li prve dvije znamenke 00
    var brZaTIN = "" + godina + mjesec + dan + spol;
  
    var kontrol = brZaTIN % 97;
    var kontBR = 97 - kontrol;
    var gotov = brZaTIN + kontBR;
    if (gotov.length == 12) {
      gotov = gotov.substring(1);
    }
    document.getElementById("tin").value = gotov;
  }
  
  document.getElementById("btn").addEventListener("click", izracun);
  
  function reset() {
    document.getElementById("frm").reset();
    document.getElementById("tin").value = "";
  }
  document.getElementById("reset").addEventListener("click", reset);