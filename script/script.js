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
    const cardTitle = callBtn.parentNode.parentNode.childNodes[3].innerText;
    const cardTImg =
      callBtn.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1]
        .src;
    console.log(cardTImg);

    const cointCount = getElement("coin-count");
    let currentCoins = Number(cointCount.innerText);
    if (currentCoins >= 20) {
      alert(` Calling to ${cardDeatail} on ${cardNumb}`);
      cointCount.innerText = currentCoins - 20;
      const historyList = getElement("history-list");
      const createDiv = document.createElement("div");
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      createDiv.innerHTML = `
         <div class="bg-[#FAFAFA] rounded-lg  p-2 mb-4 text-[#111] shadow-sm">
                        <img src=${cardTImg} class='w-8' alt="">

                        <div class="flex justify-between items-center mt-1">
                            <div>
                                <h4 class="font-semibold text-[14px]   ">${cardTitle}</h4>
                                <p class=" font-normal text-[15px]">${cardNumb}</p>
                            </div>
                            <p class="text-[15px]">${timeString}</p>
                        </div>
                    </div>`;
      historyList.appendChild(createDiv);
    } else {
      alert("You don't have enough coins to make a call.");
    }
  });
}

const clearBtn = getElement("clear-btn");
clearBtn.addEventListener("click", function () {
  const historyList = getElement("history-list");
  historyList.innerHTML = "";
});
