const mult1 = 0.26; //  Multipliers
const mult2 = 1.6;
const mult3 = 1.4;
const mult4 = 1.1;
const mult5 = 1.3;
const foodLimit = 465;
const factor = 3.1;

function harvestingLogic() {
    let foodStart = parseInt(window.prompt('Type the starting amount of food'));
    let foodHarvested = parseInt(window.prompt('Type the harvested amount of food'));
    let foodNextTurn;
    for (i = 1; i < 13; i++) {
        document.write(`<br> <br> turn ${i}`);
        document.write(`<br> starting food ${foodStart.toFixed()}`);
        document.write(`<br> harvested by all modules ${foodHarvested.toFixed()}`);
        let foodThisTurn = (foodStart - foodHarvested) / factor;
        if (foodThisTurn < 0) foodThisTurn = 0;
        document.write(`<br> food left ${(foodThisTurn * factor).toFixed()}`)
        if (foodThisTurn > 130) {
            foodNextTurn = foodStart;
        } else if (foodThisTurn > 100) {
            foodNextTurn = foodThisTurn * mult1 + 116;
        } else if (foodThisTurn > 60) {
            foodNextTurn = foodThisTurn * mult2 - 19;
        } else if (foodThisTurn > 30) {
            foodNextTurn = foodThisTurn * mult3 - 6;
        } else if (foodThisTurn > 10) {
            foodNextTurn = foodThisTurn * mult4 + 3;
        } else if (foodThisTurn > 1) {
            foodNextTurn = foodThisTurn * mult5;
        } else {
            foodNextTurn = 0;
            document.write("<p style='color: red; font-size: 30px'> GAME OVER </p>");
            break;
        }
        document.write(`<br> food after recovery ${(foodNextTurn * factor).toFixed()}`);
        foodStart = foodNextTurn * factor;
        healthStatus = foodStart / foodLimit;
        document.write(`<br> farm health status ${healthStatus.toFixed(2) * 100} %`)
    }

}

harvestingLogic();