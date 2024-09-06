package edu.cmu.cs.cs214.lab02.shapes;

public class Circle implements Shape {
    // change visibility of radius from private to protected
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }
}
