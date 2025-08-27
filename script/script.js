function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
function getByClassName(className) {
  const element = document.getElementsByClassName(className);
  return element;
}

const cardHearts = getByClassName("heart-icon");

for (cardHeart of cardHearts) {
  cardHeart.addEventListener("click", function () {
    const navHeart = getElement("nav-heart");
    navHeart.innerText = Number(navHeart.innerText) + 1;
  });
}

const callBtns = getByClassName("call-btn");
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const cardNumb = callBtn.parentNode.parentNode.childNodes[7].innerText;
    const cardDeatail = callBtn.parentNode.parentNode.childNodes[5].innerText;

    const cointCount = getElement("coin-count");
    let currentCoins = Number(cointCount.innerText);
    if (currentCoins >= 20) {
      alert( ` Calling to ${cardDeatail} on ${cardNumb}`);
      cointCount.innerText = currentCoins - 20;
    } else {
      alert("You don't have enough coins to make a call.");
    }
  });
}
