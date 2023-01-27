/**
We have a two-dimensional board game involving snakes. The board has two types of squares on it: +'s represent impassable squares where snakes cannot go, and 0's represent squares through which snakes can move. Snakes can only enter on the edges of the board, and each snake can move in only one direction. We'd like to find the places where a snake can pass through the entire board, moving in a straight line.

Here is an example board:

col-->        0  1  2  3  4  5  6
           +----------------------
row      0 |  +  +  +  0  +  0  0
 |       1 |  0  0  0  0  0  0  0
 |       2 |  0  0  +  0  0  0  0
 v       3 |  0  0  0  0  +  0  0
         4 |  +  +  +  0  0  0  +
Write a function that takes a rectangular board with only +'s and 0's, and returns two collections:

one containing all of the row numbers whose row is completely passable by snakes, and
the other containing all of the column numbers where the column is completely passable by snakes.
Sample Inputs:

board1 = [['+', '+', '+', '0', '+', '0', '0'],
['0', '0', '0', '0', '0', '0', '0'],
['0', '0', '+', '0', '0', '0', '0'],
['0', '0', '0', '0', '+', '0', '0'],
['+', '+', '+', '0', '0', '0', '+']]

board2 = [['+', '+', '+', '0', '+', '0', '0'],
['0', '0', '0', '0', '0', '+', '0'],
['0', '0', '+', '0', '0', '0', '0'],
['0', '0', '0', '0', '+', '0', '0'],
['+', '+', '+', '0', '0', '0', '+']]

board3 = [['+', '+', '+', '0', '+', '0', '0'],
['0', '0', '0', '0', '0', '0', '0'],
['0', '0', '+', '+', '0', '+', '0'],
['0', '0', '0', '0', '+', '0', '0'],
['+', '+', '+', '0', '0', '0', '+']]

board4 = [['+']]

All test cases:

findPassableLanes(board1) => Rows: [1], Columns: [3, 5]
findPassableLanes(board2) => Rows: [], Columns: [3]
findPassableLanes(board3) => Rows: [1], Columns: []
findPassableLanes(board4) => Rows: [], Columns: []
**/

/**
 * 
 * @param board 
 * @returns 2d array of passableRows and passableCols
 */
function findPassableLanes(board) {
    let passableRows = [];
    let passableCols = [];

    // Check each row
    for (let i = 0; i < board.length; i++) {
        let rowIsPassable = true;
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== "0") {
                rowIsPassable = false;
                break;
            }
        }
        if (rowIsPassable) {
            passableRows.push(i);
        }
    }

    // Check each column
    for (let j = 0; j < board[0].length; j++) {
        let columnIsPassable = true;
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] !== "0") {
                columnIsPassable = false;
                break;
            }
        }
        if (columnIsPassable) {
            passableCols.push(j);
        }
    }

    return [passableRows, passableCols];
}
