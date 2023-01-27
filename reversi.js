/*
You are creating Flippy, an AI that plans to take over the world by solving games having to do with flipping things. First the AI must master a one-dimensional game called Reversi.

There are two players, denoted by 'X' (the AI player) and 'O'.The goal is to place a new 'X' in a blank space on the board to capture the 'O' tokens between two 'X' tokens (with no spaces in between). A move can capture to the left or the right, not both, of the newly placed 'X'.

The valid moves in this example are 4, 5, and 13 (the blank spaces):
   0    1    2    3    4    5    6    7    8    9   10   11   12   13
[ 'X', 'O', 'O', 'O', ' ', ' ', 'O', 'O', 'X', 'O', 'X', 'X', 'O', ' ' ]
* Move at 13 (flips 12)                                       <--- 'X' 
* A move at 4 <------ 'X' (flips 1, 2 and 3)      
* Move at 5                 'X' --------->  (flips 6 and 7)

The optimal move captures as many 'O' as possible. In this case, that move is 4, which captures three tokens).

Write a function that, given a board, returns the optimal move for 'X', together with how many tokens are captured.

Test Input:
board1 = [ 'X', 'O', 'O', 'O', ' ', ' ', 'O', 'O', 'X', 'O', 'X', 'X', 'O', ' ' ] => 4,3 (in any order: the best move is at index 4 and captures 3 tokens)
board2 = [ 'X', 'X', 'O', ' ', 'O', 'O', 'O', 'O', ' ', 'X', 'O', 'O', ' ' ] => 12,2
board3 = [ ' ', 'O', 'X'] => 0,1
board4 = [ 'X', 'O' ] => None/null (no open space)
board5 = [ 'X', 'O', ' ' ] => 2,1
board6 = [ 'X', 'O', ' ', 'O', 'O', 'X', 'O', ' ', ' ' ] => 2,2 (if a move captures both left and right we only count the larger
  of the two captures)
board7 = [ 'X', 'O', 'O', ' ', 'O', 'O', 'O' ] => 3,2
board8 = [ 'O', 'O', ' ', 'X' ] => None/null
board9 = [ 'X', 'O', ' ', 'X', 'O', ' ', 'O', 'X' ] => 2,1 or 5,1
board10 = [ 'X', 'O', 'X', ' ' ] => None/null
board11 = [ 'X', 'X', 'O', ' ', 'O', 'O', 'O', 'O', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X' ] => 8,7 

All Test Cases:
reversi(board1) => 4,3 
reversi(board2) => 12,2
reversi(board3) => 0,1
reversi(board4) => None/null
reversi(board5) => 2,1
reversi(board6) => 2,2
reversi(board7) => 3,2
reversi(board8) => None/null
reversi(board9) => 2,1 or 5,1
reversi(board10) => None/null
reversi(board11) => 8,7

Complexity Variables:
n = length of the board
*/

"use strict";

const board1 = ['X', 'O', 'O', 'O', ' ', ' ', 'O', 'O', 'X', 'O', 'X', 'X', 'O', ' '];
const board2 = ['X', 'X', 'O', ' ', 'O', 'O', 'O', 'O', ' ', 'X', 'O', 'O', ' '];
const board3 = [' ', 'O', 'X'];
const board4 = ['X', 'O'];
const board5 = ['X', 'O', ' '];
const board6 = ['X', 'O', ' ', 'O', 'O', 'X', 'O', ' ', ' '];
const board7 = ['X', 'O', 'O', ' ', 'O', 'O', 'O'];
const board8 = ['O', 'O', ' ', 'X'];
const board9 = ['X', 'O', ' ', 'X', 'O', ' ', 'O', 'X'];
const board10 = ['X', 'O', 'X', ' '];
const board11 = ['X', 'X', 'O', ' ', 'O', 'O', 'O', 'O', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X'];

// find an empty space
// for each space, look left and right
// return location in array, return the number of O's captured

function reversi(board) {
    let len = board.length;
    let maxO = 0;
    let pos = 0;
    let leftCaptures = -1;

    for (let i = 0; i < len; i++) {
        // we can build the leftCaptures as we go through...
        if (board[i] === 'X') {
            leftCaptures = 0; // we can now capture since we saw an X...
        } else if (board[i] === 'O' && leftCaptures >= 0) {
            // valid O to capture -- until we see a space...
            leftCaptures++;
        }

        if (board[i] !== ' ') continue;
        // console.log(leftCaptures);
        // now it's only Os
        // if anything was captured on the left, save that in maxO...
        if (leftCaptures > maxO) {
            pos = i;
            maxO = leftCaptures;
        }

        // reset counter for left
        leftCaptures = -1;

        let rightCaptures = 0;
        let j = i + 1;
        while (j < len) {
            if (board[j] === 'X') break;
            if (j >= len - 1 || board[j] === ' ') {
                // at last character (or somehow beyond it) and it's not an X, so just reset count and stop
                // or if it's a space (no X found before)
                rightCaptures = 0;
                break;
            }
            if (board[j] === 'O') {
                rightCaptures++;
            }
            j++;
        }

        if (rightCaptures > maxO) {
            pos = i;
            maxO = rightCaptures;
        }

        if (j >= len - 1) {
            // no need to keep going in the for loop
            // since we already hit the end while
            // looking to the right
            break;
        }

    }

    if (maxO === 0) return null;
    return [pos, maxO];
}

console.log(reversi(board1));
console.log(reversi(board2));
console.log(reversi(board3));
console.log(reversi(board4));
console.log(reversi(board5));
console.log(reversi(board6));
console.log(reversi(board7));//
console.log(reversi(board8));//
console.log(reversi(board9));
console.log(reversi(board10));
console.log(reversi(board11));
console.log(`
reversi(board1) => 4,3 
reversi(board2) => 12,2
reversi(board3) => 0,1
reversi(board4) => None/null
reversi(board5) => 2,1
reversi(board6) => 2,2
reversi(board7) => 3,2
reversi(board8) => None/null
reversi(board9) => 2,1 or 5,1
reversi(board10) => None/null
reversi(board11) => 8,7
`);
// look for the moost O's that are consecutive followed by an em
