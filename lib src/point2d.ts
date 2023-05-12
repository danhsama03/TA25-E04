import { question } from "readline-sync";

class Point2D {
    private xPoint: number;
    private yPoint: number;

    constructor(x: number = 0, y: number = 0) {
        this.xPoint = x;
        this.yPoint = y;
    }

    public scan(): void {
        this.xPoint = Number(question("Nhap hoanh do x: "));
        this.yPoint = Number(question("Nhap tung do y: "));
    }

    public print(): void {
        console.log("Toa do cua diem la: " + this.xPoint + ", " + this.yPoint);
    }

    public get x(): number {
        return this.xPoint;
    }

    public set x(value: number) {
        this.xPoint = value;
    }

    public get y(): number {
        return this.yPoint;
    }

    public set y(value: number) {
        this.yPoint = value;
    }

    public move(dx: number, dy: number): void {
        this.xPoint += dx;
        this.yPoint += dy;
    }

    public getDistance(point: Point2D): number {
        const dx = this.xPoint - point.xPoint;
        const dy = this.yPoint - point.yPoint;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

export {Point2D};