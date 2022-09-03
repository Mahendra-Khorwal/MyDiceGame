function rollDice() {
  let first = Math.floor(Math.random() * 6) + 1;
  let fdi = `images/dice${first}.png`;
  document.querySelectorAll("img")[0].setAttribute("src", fdi);

  let second = Math.floor(Math.random() * 6) + 1;
  let sdi = `images/dice${second}.png`;
  document.querySelectorAll("img")[1].setAttribute("src", sdi);
  let status = document.getElementById("status");
  if (first > second) {
    status.innerHTML = "Player:-1 is winner";
    status.style.color = "#550080";
    status.style.fontFamily = '"Courier New", Courier, monospace';
    status.style.fontSize = "50px";
  } else if (first < second) {
    status.innerHTML = "Player:-2 is winner";
    status.style.color = "blue";
    status.style.fontFamily = '"Courier New", Courier, monospace';
    status.style.fontSize = "50px";
  } else {
    status.innerHTML = "It's Draw";
    status.style.color = "red";
    status.style.fontSize = "70px";
  }
}
rollDice();
