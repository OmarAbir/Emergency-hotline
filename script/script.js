function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const cardHearts = document.getElementsByClassName("heart-icon");

for (cardHeart of cardHearts) {
  cardHeart.addEventListener("click", function () {
    const navHeart = getElement("nav-heart");
    navHeart.innerText = Number(navHeart.innerText) + 1;
  });
}
