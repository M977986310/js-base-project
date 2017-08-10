"use strict";

function judgmentNumberOfOther(number) {
    let result = '';

    for (let index = number; index >= 3; index--) {
        result += `${index} bottles of beer on the wall, ${index} bottles of beer.
        Take one down and pass it around, ${index - 1} bottles of beer on the wall.\n`;
    }

    return result;
}

function judgmentNumberOfOne() {

    return `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.\n`;
}

function judgmentNumberOfTwo() {

    return `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.\n`;
}

function main(number) {
    let result = judgmentNumberOfOther(number) + judgmentNumberOfTwo() + judgmentNumberOfOne();

    return result + `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
}

module.exports = main;

