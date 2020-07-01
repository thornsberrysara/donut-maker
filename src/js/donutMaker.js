class DonutMaker {

    constructor() {
        this._autoClickerCost = 100;
        this._autoClickerCount = 0;
        this._donutCount = 0;
    }

    subtractDonutsAfterClickerPurchase() {
        this._donutCount -= this._autoClickerCost
    }

    getAutoClickerCount() {
        return this._autoClickerCount;
    }

    getDonutCount() {
        return this._donutCount;
    }

    increaseCostOfAutoClicker() {
        this._autoClickerCost += this._autoClickerCost * .1;
    }

    increaseAutoClickerCount() {
        this._autoClickerCount++;
    }

    purchaseAutoClicker() {
        this.subtractDonutsAfterClickerPurchase();
        this._autoClickerCost();
        this._autoClickerCount();
    }

    increaseDonutsAfterClick() {
        this._donutCount++;
    }
}