function result() {
  document.getElementById("isi").style.display = "none";
  document.getElementById("fsub").style.display = "none";
  document.getElementById("hasil").style.display = "block";
  document.getElementById("asub").style.display = "block";

  document.getElementById("resper").innerText =
    Math.floor(Math.random() * 100) - 1 + "%";
}
