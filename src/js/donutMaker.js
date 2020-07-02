class DonutMaker {

    constructor() {
        this.autoClickerCost = 100;
        this.autoClickerCount = 0;
        this.donutCount = 0;
    }
    
    getDonutCount() {
        return this.donutCount;
    }
    
    increaseDonutsAfterClick() {
        this.donutCount++;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    increaseAutoClickerCount() {
        this.autoClickerCount++;
    }

    subtractDonutsAfterClickerPurchase() {
        this.donutCount -= this.autoClickerCost
    }

    increaseCostOfAutoClicker() {
        this.autoClickerCost += this.autoClickerCost * .1;
    }

    purchaseAutoClicker() {
        this.autoClickerCost();
        this.subtractDonutsAfterClickerPurchase();
        this.increaseAutoClickerCount();
    }

}