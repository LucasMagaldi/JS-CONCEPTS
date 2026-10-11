// Rotate an array k positions to the right without using slice, splice or spread, using only for and indexes.


function rotateArrayKPossitions(array, position) {
    let rotatedArray = []
    const arrayLength = array.length

    for (let i = 0; i < array.length; i ++) {
        const newPosition = (i + position) % arrayLength
        rotatedArray[newPosition] = array[i]
    }
    
    return rotatedArray
}

const arrayInput = [1, 2, 3, 4, 5]
const kPossition = 2

const arrayOutput = rotateArrayKPossitions(arrayInput, kPossition)
console.log(arrayOutput)