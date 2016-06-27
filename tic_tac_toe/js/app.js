console.log("Document linked!")

var board = [
  [document.getElementbyID("1a"), document.getElementbyID("1b"), document.getElementbyID("1c")],
  [null, null, null],
  [null, null, null]
]

var turn = 0;

var turnTaking = function() {
  turn += 1;
  if(turn % 2 === 0) {
    return "X";
  }
  else {
    return "O";
  }
}
