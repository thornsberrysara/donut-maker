class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.donutDisplay = donutDisplay;
        // this.autoClickerCount = 0;
        // this.displayAutoClicks = displayAutoClicks;
        // this.autoClickerCost = 100;
    }
    
    increaseDonutsAfterClick() {
        this.donutCount++;
    }
    
    updateDonutDisplay() {
        this.donutDisplay.innerText = this.donutCount;
    }
    
    // increaseAutoClickerCount() {
    //     this.autoClickerCount++;
    // }
    
    // updateDisplayAutoClicks() {
    //     this.displayAutoClicks.innerText = this.autoClickerCount;
    // }
    
    // subtractDonutsAfterClickerPurchase() {
    //     this.donutCount -= this.autoClickerCost;
    // }

    // increaseCostOfAutoClicker() {
    //     this.autoClickerCost += this.autoClickerCost * .1;
    // }

    // purchaseAutoClicker() {
    //     this.autoClickerCost();
    //     this.subtractDonutsAfterClickerPurchase();
    //     this.increaseAutoClickerCount();
    // }

}