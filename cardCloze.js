var ClozeCard = function(clozeQuestion, clozeAnswer) {
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front, back);
    }

    this.clozeQuestion = clozeQuestion;
    this.clozeAnswer = clozeAnswer;


}

module.exports = ClozeCard;
