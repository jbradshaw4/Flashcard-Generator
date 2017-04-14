var inquirer = require('inquirer');

var BasicCard = require('./cardBasic.js');

var ClozeCard = require('./cardCloze.js');

var fs = require('fs');

var questionsJson = require('./questions.json');

var clozeJson = require('./clozejson.json');

startGame();

function startGame() {
    var index = 0;
    if (index < questionsJson.length) {
        for (var i = 0; i < questionsJson.length; i++) {
            var currentCard = new BasicCard(questionsJson[i].front, questionsJson[i].back)
        } 

    } 
    
}


BasicCard.prototype.showBasic = function() {
    console.log("Front: " + this.front);
    console.log("Back: " + this.back);
}


ClozeCard.prototype.showBasic = function() {
    console.log("ClozeQuestion: " + this.clozeQuestion);
    console.log("ClozeAnswer: " + this.clozeAnswer);
}



function basicQuestion() {

    this.getData = function() {
        fs.readFile('questions.json', "utf8", function(err, data) {
            if (err) {
                throw err;
            }
            console.log(data);

            var dataArr = data.split(",");
            console.log(dataArr);
        })
    }
}
