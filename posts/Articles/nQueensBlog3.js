//this is my most elegant solution thsu far
//there were two key insights that got me here from our last post:
//1. The board has a lot of redundant 0's in it. All we really care about in the board is the placement of the queens, not the placement of the 0's
//2. Checking for conflicts is a super simple operation. 
//You need to check the column for the new queen against which columns are already occupied. It seems pretty straightforward and obvious to do this for columns:
//create an object where the keys are the columns (0 through n-1), and the value for each key is simply whether it's already occupied
//Then whenever you place a new queen, you just set the value for that column property to true;
//add those lines of code right after this comment

//from there, you can do the same with the diagonals. Each diagonal can be reduced to what it's 'index' is at row 0; 
//in this way, we can reduce our entire n-queens algorithm down to 25 lines of code, and it runs about two orders of magnitude more efficiently than our original solution, which was over 300 lines long in my case once we added in all the conflict testers and board copier

//if you want to test out the speed of your algorithms, check out my post on basic speed testing in the console


var nQueens = function(n) {
  var solutionCount = 0;

  var columns = {};
  var minorIndices = {};
  var majorIndices = {};

  var rFinder = function(qCount) {
    if(qCount === n) {
      solutionCount++; 
    } else {
      for (var j = 0; j < n; j++) {
        if( !(columns[j] || minorIndices[j + qCount] || majorIndices[j - qCount]) ) {
          columns[j] = true;
          minorIndices[j + qCount] = true;
          majorIndices[j - qCount] = true;

          rFinder( qCount + 1);

          majorIndices[j - qCount] = false;
          columns[j] = false;
          minorIndices[j + qCount] = false;
        }
      }
    }
  }

  rFinder(0);
  return solutionCount;
}