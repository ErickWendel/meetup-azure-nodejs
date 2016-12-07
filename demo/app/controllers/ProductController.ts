import { ProductService } from './../service/ProductService';
export default class ProductController {
    private productService: ProductService;
    constructor() {
        this.productService = new ProductService();
    }
    async list() {
        try {
            return await this.productService.list();

        }
        catch (e) {
            return [];
        }
    }

    async create() {
        try {
            return await this.productService.create();
        }
        catch (e) {
            console.log('e', e);
            return [];
        }
    }
}

Object.seal(ProductController);
