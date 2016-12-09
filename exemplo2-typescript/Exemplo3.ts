'use strict';
class Product {
    private products: Product[] = [];

    public descricao: string;
    public valor: number;

    listar(): Promise<Product[]> {
        return new Promise((resolve, reject) => {
            resolve(this.products);
        });
    }
    cadastrar(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.products.push(<Product>{ descricao: 'Teste', valor: 12 });
            return resolve(true);
        });
    }
}

class Service {
    public product: Product;
    constructor() {
        this.product = new Product();
    }
    async executar(): Promise<Product[]> {
        const result = await this.product.cadastrar();
        const items = await this.product.listar();
        return items;
    }
}
class Init {
    static run() {
        const result = new Service();

        result.executar().then(resultado => {
            console.log(resultado);
        });
    }
}
Init.run();
