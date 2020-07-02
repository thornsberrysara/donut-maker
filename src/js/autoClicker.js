class AutoClicker {

    constructor() {
        this.autoClickerCount = 0;
        this.autoClicksDisplay = autoClicksDisplay;
        this.autoClickerCost = 100;
    }

    increaseAutoClickerCount() {
        this.autoClickerCount++;
    }
    
    updateAutoClicksDisplay() {
        this.autoClicksDisplay.innerText = this.autoClickerCount;
    }
    
    subtractDonutsAfterClickerPurchase() {
        this.donutCount -= this.autoClickerCost;
    }

    increaseCostOfAutoClicker() {
        this.autoClickerCost += this.autoClickerCost * .1;
    }

    purchaseAutoClicker() {
        this.autoClickerCost();
        this.subtractDonutsAfterClickerPurchase();
        this.increaseAutoClickerCount();
        this.updateAutoClicksDisplay();
    }

}