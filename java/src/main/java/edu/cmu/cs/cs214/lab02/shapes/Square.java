package edu.cmu.cs.cs214.lab02.shapes;

public class Square implements Shape {
    // change visibility of sideLen from private to protected
    private final double sideLen;

    public Square(double sideLen) {
        this.sideLen = sideLen;
    }
    
    public double getArea() {
        return sideLen * sideLen;
    }
}
