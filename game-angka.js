document.getElementById("generate").style.display = "none";
let kiras = document.getElementById("jawab");

kiras.addEventListener("keypress", function (event) {
  console.log(1);
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("kiras").click();
  }
});

function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("generate").style.display = "block";

  let tSoal = Math.floor(Math.random() * 0) + 1;

  if (tSoal == 1) {
    let x = Math.floor(Math.random() * 10) + 1;
    let y = Math.floor(Math.random() * 10) + 1;
    let z = Math.floor(Math.random() * 10) + 1;

    hasil = x + y + z;
    document.getElementById("soal").innerHTML = x + "+" + y + "+" + z;
  }
}

function soal() {
  let input = document.getElementById("jawab");
  if (input.value == hasil) {
    input.value = "";
    let tSoal = Math.floor(Math.random() * 5) + 1;

    if (tSoal == 1) {
      let x = Math.floor(Math.random() * 10) + 1;
      let y = Math.floor(Math.random() * 10) + 1;
      let z = Math.floor(Math.random() * 10) + 1;

      hasil = x + y + z;

      document.getElementById("soal").innerHTML = x + "+" + y + "+" + z;
    }
    if (tSoal == 2) {
      let x = Math.floor(Math.random() * 10) + 1;
      let y = Math.floor(Math.random() * 10) + 1;
      let z = Math.floor(Math.random() * 10) + 1;

      hasil = x - y + z;

      document.getElementById("soal").innerHTML = x + "-" + y + "+" + z;
    }
    if (tSoal == 3) {
      let x = Math.floor(Math.random() * 10) + 1;
      let y = Math.floor(Math.random() * 10) + 1;
      let z = Math.floor(Math.random() * 10) + 1;

      hasil = x - y - z;

      document.getElementById("soal").innerHTML = x + "-" + y + "-" + z;
    }
    if (tSoal == 4) {
      let x = Math.floor(Math.random() * 10) + 1;
      let y = Math.floor(Math.random() * 10) + 1;
      let z = Math.floor(Math.random() * 10) + 1;

      hasil = x * y + z;

      document.getElementById("soal").innerHTML = x + "x" + y + "+" + z;
    }
    if (tSoal == 5) {
      let x = Math.floor(Math.random() * 10) + 1;
      let y = Math.floor(Math.random() * 10) + 1;
      let z = Math.floor(Math.random() * 10) + 1;

      hasil = x - y * z;

      document.getElementById("soal").innerHTML = x + "-" + y + "*" + z;
    }
    if (tSoal == 6) {
      let x = Math.floor(Math.random() * 10) + 1;
      let y = Math.floor(Math.random() * 10) + 1;
      let z = Math.floor(Math.random() * 10) + 1;

      hasil = x * y * z;

      document.getElementById("soal").innerHTML = x + "x" + y + "x" + z;
    }
  } else {
    input.value = "";
  }
}
