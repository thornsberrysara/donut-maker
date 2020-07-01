class DonutMaker {

    constructor() {
        this._autoClickerCost = 100;
        this._autoClickerCount = 0;
        this._donutCount = 0;
    }
    
    getDonutCount() {
        return this._donutCount;
    }
    
    increaseDonutsAfterClick() {
        this._donutCount++;
    }

    getAutoClickerCount() {
        return this._autoClickerCount;
    }

    increaseAutoClickerCount() {
        this._autoClickerCount++;
    }

    subtractDonutsAfterClickerPurchase() {
        this._donutCount -= this._autoClickerCost
    }

    increaseCostOfAutoClicker() {
        this._autoClickerCost += this._autoClickerCost * .1;
    }

    purchaseAutoClicker() {
        this._autoClickerCost();
        this.subtractDonutsAfterClickerPurchase();
        this._autoClickerCount();
    }

}