//This post builds on my earlier post about n-queens. 
//We'll pick up with the same pattern, but with one key difference in this implementation: we're using just a single board, not making copies of it for each recursive invocation
//can you think of how you would implement this with just one board before be we begin? 

var nQueensContainerFunction = function(n) {
  var board = makeBoard(n);
  var solutionsCount = 0;

  var recursiveQueens = function(board, queenCount) {
    if( queenCount === n ) {
      solutionsCount++;
    } else {
      for(var i = 0; i < n; i++) {
        //here is where we made a new board in the previous version. 
        var nextBoard = boardCopier(board);

        //instead, in this version, we're going to just keep one board, so we can skip this copy part. 
        //we still need to place a new queen on the board as we did before
        board[queenCount][i] = 1;
        //so now that we've placed a new queen on the board, we know we'll have to take it off at some point so we can try other possible queen placements on this same row after we've checked to find all the possible solutions with the queen placed in this position
        //but we do want to see what solutions exist with this queen placement.
        //so let's invoke recursiveQueens with this queen placement, which will recurse down 'til we find all the possible queen placements for this starting queen position
        //and then after we've recursed to check for all possibilities for a queen at this position, let's toggle that queen off and move her to the next position
        //now that we've placed the queen, we need to see if this board has a conflict or not.
        //There's no sense in finding all possible placements of queens from here if our board already has a conflict
        if( boardHasNoConflicts( board ) === true ) {
          //if the board doesn't have any conflict, then we want to repeat the process again on the next row of the board!
          //in this way, we will check for all possible placements of queens
          recursiveQueens( board );
        }
        //now that we've recursed down and foudn all possible combinations for this queen placement, let's toggle this queen off and repeat the process again for the next queen placement, which is the next i in the for loop
        board[queenCount][i] = 0; 
      }
    }
  }
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