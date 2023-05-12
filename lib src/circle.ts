import { question } from "readline-sync";
import { Point2D } from "./point2d";

class Circle {
  private _center: Point2D;
  private _radius: number;

  constructor(center: Point2D, radius: number) {
    this._center = center;
    if (radius > 0) {
      this._radius = radius;
    } else { 
      this._radius = 1;
    }
  }

  public scan(): void {
    console.log("Nhap tam hinh tron: ");
    this._center.scan();
    this._radius = parseFloat(question("Nhap ban kinh hinh tron: "));
  }

  public print(): void {
    console.log(`Tam: `);
    this._center.print();
    console.log(`Ban kinh: ` + this._radius);
  }

  public get center(): Point2D {
    return this._center;
  }

  public set center(center: Point2D) {
    const x = center.x;
    const y = center.y;
    this._center = new Point2D(x, y);
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(radius: number) {
    if (radius > 0)
      this._radius = radius;
  }

  public move(dx: number, dy: number): void {
    this._center.move(dx, dy);
  }

  public getArea(): number {
    return Math.PI * this._radius ** 2;
  }
}

export { Circle };
