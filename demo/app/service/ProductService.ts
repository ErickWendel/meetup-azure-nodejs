import { IProductService } from './contracts/IProductService';
import Product from './../model/Product';
import { Database } from './../database/Database';
import * as Mongoose from 'mongoose';

export class ProductService implements IProductService {
    private productDb: Mongoose.Model<Mongoose.Document>;
    constructor() {
        this.productDb = new Database().product();
    }
    async list(): Promise<Object[]> {
        return await this.productDb.find();
    }
    async create(): Promise<void[]> {
        
        await this.productDb.remove({});
        let promises: any[] = [];
        for (var i = 0; i < 1000; i++) {
            var creationDate = new Date();
            creationDate.setDate(i * -1);
            var product: Product = {
                creationDate,
                description: `Item ${new Date().getTime()}`,
                value: (10.0 + i)
            };
            const db = new this.productDb(product);
            promises.push(await db.save());

        }

        return promises;
    }

}