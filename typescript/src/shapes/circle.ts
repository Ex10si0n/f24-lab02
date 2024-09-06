interface Circle {
    // defined private properties
    radius: number,
    computeArea: () => number
}

function newCircle(radius: number): Shape {
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius;
        }
    };
}

export { Circle, newCircle }