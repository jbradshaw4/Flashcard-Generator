var inquirer = require('inquirer');

var BasicCard = require('./cardBasic.js');

var ClozeCard = require('./cardCloze.js');

var front = [
    "Who was the first President of the United States",
    "What movie prompted censorship boards to enact PG13",
    "To be grammatically correct- Neil Armstrong should have said"
]

var back = [
    "George Washington",
    "Indiana Jones and the Temple of Doom",
    "That's one small step for a man, one giant leap for mankind"
]

var clozeQuestion = [
    "...was the first President of the United States",
    "...was the movie that prompted censorship boards to enact PG13",
    "That's one small step for man, one giant leap for mankind should be- ..."
]

var clozeAnswer = [
    "George Washington",
    "Indiana Jones and the Temple of Doom",
    "That's one small step for a man, one giant leap for mankind"
]
