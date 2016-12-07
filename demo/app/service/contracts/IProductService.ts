import Product from '../../model/Product';
import  * as Mongoose from 'mongoose';

export interface IProductService {
    list(): Promise<Product[]>;
    create(): Promise<Mongoose.Document>;
}