const bakeButton = document.querySelector(".click-handler__bake-button");

bakeButton.addEventListener("click", () => {
    event.preventDefault();
    increaseDonutsAfterClick();
    getDonutCount();
})

const purchaseButton = document.querySelector(".auto-clicker__purchase-button");

purchaseButton.addEventListener("click", () => {
    event.preventDefault();
    purchaseAutoClicker();
    subtractDonutsAfterClickerPurchase();
    getAutoClickerCount();
});
