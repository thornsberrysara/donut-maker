const donutDisplay = document.querySelector(".click-handler__donut-display");
const autoClicksDisplay = document.querySelector(".auto-clicker__auto-clicks-display");
const donutMaker = new DonutMaker();

const bakeButton = document.querySelector(".click-handler__bake-button");
bakeButton.addEventListener("click", () => {
    event.preventDefault();
    donutMaker.increaseDonutsAfterClick();
    donutMaker.updateDonutDisplay();
})

const purchaseButton = document.querySelector(".auto-clicker__purchase-button");
purchaseButton.addEventListener("click", () => {
    event.preventDefault();
    donutMaker.increaseAutoClickerCount();
    donutMaker.subtractDonutsAfterClickerPurchase();
    donutMaker.updateAutoClicksDisplay();
    donutMaker.updateDonutDisplay();
});
