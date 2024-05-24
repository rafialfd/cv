let input = document.getElementById("jawaban");
let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 100);
let ans = x + y;
let score = 0;
document.getElementById("score").innerHTML = score;
document.getElementById("angka1").innerHTML = x;
document.getElementById("angka2").innerHTML = y;

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("kir").click();
  }
});

function jawab() {
  let z = input.value;

  if (ans == z) {
    document.getElementById("ans").innerHTML = "";
    input.value = "";
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    document.getElementById("angka1").innerHTML = x;
    document.getElementById("angka2").innerHTML = y;
    ans = x + y;
    score += 1;
    document.getElementById("score").innerHTML = score;
  } else {
    document.getElementById("ans").innerHTML = "salah";
    score = 0;
    document.getElementById("score").innerHTML = score;
  }
}
