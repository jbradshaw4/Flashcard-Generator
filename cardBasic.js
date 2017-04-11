var BasicCard = function(front, back) {
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front, back);
    }
    var new BasicCard = function(front, back) {
        this.front = front;
        this.back = back;
    }

    BasicCard.prototype.showBasic = function (){
    	console.log("Front: " + this.front);
    	console.log("Back: " + this.back);
    }

    for (var i=0; i<BasicCard.length; i++){
    	console.log(front);
    }
}
