var nQueensContainerFunction = function(n) {
  var board = makeBoard(n);
  var solutionsCount = 0;

  var recursiveQueens = function(board, queenCount) {
    //checking against the base case. if the number of queens equals n, we're done!
    if( queenCount === n ) {
      solutionsCount++;
    } else {
      //if we've already placed 5 queens on the board, now we start checking where we can place queens on the 6th row
      //we'll want to check each position in the next row to see if a queen placed there is valid or not
      for(var i = 0; i < n; i++) {
        //the simples way of thinking about this pattern means each recursive invocation of recursiveQueens gets it's own board, so we don't need to worry about undoing queen placement yet.
        //the next blog post shows how we would do this by removing queens as well, but each invocation getting it's own distinct board is easier to understand conceptually
        var nextBoard = boardCopier(board);
        //if you are following this route and making a new copy of the board each time, reference my post on slice()
        //Personally, I'd recommend using this post to understand the pattern, but implementing the more efficient pattern in nQueens2
        //We will never place two queens on the same row, so queenCount tells us which row we are on
        
        //we are now placing a queen at the next position within the row
        nextBoard[queenCount][i] = 1;
        //now that we've placed the queen, we need to see if this board has a conflict or not.
        //There's no sense in finding all possible placements of queens from here if our board already has a conflict
        if( boardHasNoConflicts( nextBoard ) === true ) {
          //if the board doesn't have any conflict, then we want to repeat the process again on the next row of the board!
          //in this way, we will check for all possible placements of queens
          recursiveQueens( nextBoard );
        } else {
          //do nothing. This board already has a conflict, so it is clearly not a solution, and we want to stop exploring this branch
          //since nextBoard is a copy, it doesn't affect any other boards, so we can safely just abandon it without impacting any other results
        }
      }
    }
  }
  //now that we've built out our recursive function, we need to invoke it with a staring position. Here we'll invoke it with our blank board and a queenCount of 0
  recursiveQueens( board, 0 );

  return solutionsCount;
}


var makeBoard = funciton(n) {
  var results = [];
  for(var i = 0; i < n; i++) {
    var rowResults = [];
    for(var j = 0; j < n; j++) {
      rowResults.push(0);
    }
    results.push(rowResults);
  }
  return results;
}