// Return the indexes of the elements that are greater than both neighbors.

const arrayInput = [1, 3, 2, 4, 1, 5, 0]

function peaks(input) {
    let output = []
    for(let i = 1; i < input.length; i ++) {
        const isValueGreaterSumNeighbors = input[i] > (input[i-1] + input[i + 1])
        if(isValueGreaterSumNeighbors) output.push(i)
    }

    return output
}

const output = peaks(arrayInput)
console.log("Index of the elements greater then both neighbors:", output)