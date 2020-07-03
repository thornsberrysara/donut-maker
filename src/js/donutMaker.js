class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.donutDisplay = donutDisplay;
        this.autoClickerCount = 0;
        this.autoClicksDisplay = autoClicksDisplay;
        this.autoClickerCost = 100;
    }
    
    increaseDonutsAfterClick() {
        this.donutCount++;
    }
    
    updateDonutDisplay() {
        this.donutDisplay.innerText = this.donutCount;
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
        this.updateDonutDisplay();
    }
}