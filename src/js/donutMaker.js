class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.donutDisplay = donutDisplay;
    }
    
    increaseDonutsAfterClick() {
        this.donutCount++;
    }
    
    updateDonutDisplay() {
        this.donutDisplay.innerText = this.donutCount;
    }

}