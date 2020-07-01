const donut = {
    "amountOfDonuts": 0
}

const autoClicks = {
    "autoClicksPurchased": 0
}

const makeDonuts = () => {
    donut.amountOfDonuts += 1;
}

const updateDisplayDonuts = () => {
    const displayDonuts = document.querySelector(".click-handler__display-donuts");
    displayDonuts.innerText = donut.amountOfDonuts;
}

const purchaseClicks = () => {
    autoClicks.autoClicksPurchased += 1;
}

const updateAutoClicks = () => {
    const displayAutoClicks = document.querySelector(".auto-clicker__display-auto-clicks");
    displayAutoClicks.innerText = autoClicks.autoClicksPurchased;
}

const subtractDonutsOneAutoClickPurchased = () => {
    donut.amountOfDonuts -= 100;
}

const bakeButton = document.querySelector(".click-handler__bake-button");

bakeButton.addEventListener("click", () => {
    event.preventDefault();
    makeDonuts();
    updateDisplayDonuts();
})

const purchaseButton = document.querySelector(".auto-clicker__purchase-button");

purchaseButton.addEventListener("click", () => {
    event.preventDefault();
    purchaseClicks();
    subtractDonutsOneAutoClickPurchased();
    updateAutoClicks();
});