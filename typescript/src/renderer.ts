function newRenderer(shape: Shape) {
    return {
        // defined draw method by calling shape.computeArea()
        draw() {
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }