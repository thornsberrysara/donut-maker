const donutDisplay = document.querySelector(".click-handler__donut-display");
const donutMaker = new DonutMaker();
const bakeButton = document.querySelector(".click-handler__bake-button");

bakeButton.addEventListener("click", () => {
    event.preventDefault();
    donutMaker.increaseDonutsAfterClick();
    donutMaker.updateDonutDisplay();
})

const autoClicksDisplay = document.querySelector(".auto-clicker__auto-clicks-display");
const autoClicker = new AutoClicker();
const purchaseButton = document.querySelector(".auto-clicker__purchase-button");

purchaseButton.addEventListener("click", () => {
    event.preventDefault();
    autoClicker.increaseAutoClickerCount();
    autoClicker.subtractDonutsAfterClickerPurchase();
    autoClicker.updateAutoClicksDisplay();
});
