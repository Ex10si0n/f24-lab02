interface Square {
    // define private properties
    sideLen: number,
    computeArea: () => number
}

function newSquare(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { Square, newSquare }