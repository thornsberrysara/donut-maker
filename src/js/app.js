const donutDisplay = document.querySelector(".click-handler__donut-display");
const donutMaker = new DonutMaker();
const bakeButton = document.querySelector(".click-handler__bake-button");

bakeButton.addEventListener("click", () => {
    event.preventDefault();
    donutMaker.increaseDonutsAfterClick();
    donutMaker.updateDonutDisplay();
})

// const displayAutoClicks = document.querySelector(".auto-clicker__display-auto-clicks");
// const purchaseButton = document.querySelector(".auto-clicker__purchase-button");

// purchaseButton.addEventListener("click", () => {
//     event.preventDefault();
//     donutMaker.subtractDonutsAfterClickerPurchase();
//     donutMaker.increaseAutoClickerCount();
//     donutMaker.updateDisplayAutoClicks();
// });
