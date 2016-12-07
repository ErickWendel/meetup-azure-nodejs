import * as Mongoose from 'mongoose';


import Product from './../model/Product';
export class Database {
    product() {
        var schema = new Mongoose.Schema({
            description: String,
            value: Number,
            creationDate: Date
        });
        var product = Mongoose.model('Product', schema);
        return product;
    }

    connect() {
        Mongoose.connect('mongodb://localhost/products');
        var db = Mongoose.connection;
        db.on('open', () => {
            console.log('db connected!');
        });

    }

}