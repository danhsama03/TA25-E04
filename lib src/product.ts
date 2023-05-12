export class Product {
    name: string;
    price: number;
    quantity: number;
    static totalProducts: number = 0;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        Product.totalProducts++;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    static getTotalProducts() {
        return Product.totalProducts;
    }
}

