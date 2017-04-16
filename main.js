var inquirer = require('inquirer');

var BasicCard = require('./cardBasic.js');

var ClozeCard = require('./cardCloze.js');

var fs = require('fs');

var questionsJson = require('./questions.json');

var clozeJson = require('./clozejson.json');

startGame();

showBasic();

function startGame() {
    var basicBank = []; //empty array which has questions from for loop pushed

    var index = 0;
    if (index < questionsJson.length) {
        for (var i = 0; i < questionsJson.length; i++) {
            var currentCard = new BasicCard(questionsJson[i].front, questionsJson[i].back);
            basicBank.push(currentCard);

        } //this for loop- iterates through the questions.json and pushes them into the basicBank
        console.log(basicBank);

    }

}

function showBasic() {
    console.log('')
    inquirer.prompt([{
        type: "list",
        message: "Select Test Type you want:",
        choices: ["Basic", "Cloze"],
        name: "cardType"


    }]).then(function(answers) {
        //if cardType === Cloze etc


    })
}


BasicCard.prototype.showBasic = function() {
    console.log("Front: " + this.front);
    console.log("Back: " + this.back);
}


ClozeCard.prototype.showBasic = function() {
    console.log("ClozeQuestion: " + this.clozeQuestion);
    console.log("ClozeAnswer: " + this.clozeAnswer);
}
