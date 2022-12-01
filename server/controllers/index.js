const {Product, Customer, Sale} = require('../models');

class Controller {
    //PRODUCT
    static async postProduct(req, res, next) {
        try {
            const {name, unit, stock, price, img} = req.body
            await Product.create({name, unit, stock, price, img})
            res.status(201).json({message: "Product added"})
        } catch (e) {
            next(e)
        }
    }

    static async getProducts(req, res, next) {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (e) {
            next(e)
        }
    }

    static async getProduct(req, res, next) {
        try {
            const {id} = req.params
            const product = await Product.findByPk(id)
            if (!product) throw {name: "not_found"}
            res.status(200).json(product);
        } catch (e) {
            next(e)
        }
    }

    static async patchProduct(req, res, next) {
        try {
            const {id} = req.params
            const product = await Product.findByPk(id)
            if (!product) throw {name: "not_found"}
            const {name, unit, stock, price, img} = req.body
            await Product.update({name, unit, stock, price, img}, {where: {id}})
            res.status(200).json({message: "Product updated"})
        } catch (e) {
            next(e)
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const {id} = req.params
            const product = await Product.findByPk(id)
            if (!product) throw {name: "not_found"}
            await Product.destroy({where: {id}})
            res.status(200).json({message: "Product deleted"})
        } catch (e) {
            next(e)
        }
    }

    //CUSTOMER
    static async postCustomer(req, res, next) {
        try {
            const {name, address, phoneNumber, email, discount, discType, imgKtp} = req.body
            await Customer.create({name, address, phoneNumber, email, discount, discType, imgKtp})
            res.status(201).json({message: "Customer added"})
        } catch (e) {
            next(e)
        }
    }

    static async getCustomers(req, res, next) {
        try {
            const customers = await Customer.findAll();
            res.status(200).json(customers);
        } catch (e) {
            next(e)
        }
    }

    static async getCustomer(req, res, next) {
        try {
            const {id} = req.params
            const customer = await Customer.findByPk(id)
            if (!customer) throw {name: "not_found"}
            res.status(200).json(customer);
        } catch (e) {
            next(e)
        }
    }

    static async patchCustomer(req, res, next) {
        try {
            const {id} = req.params
            const customer = await Customer.findByPk(id)
            if (!customer) throw {name: "not_found"}
            const {name, address, phoneNumber, email, discount, discType, imgKtp} = req.body
            await Customer.update({name, address, phoneNumber, email, discount, discType, imgKtp}, {where: {id}})
            res.status(200).json({message: "Customer updated"})
        } catch (e) {
            next(e)
        }
    }

    static async deleteCustomer(req, res, next) {
        try {
            const {id} = req.params
            const customer = await Customer.findByPk(id)
            if (!customer) throw {name: "not_found"}
            await Customer.destroy({where: {id}})
            res.status(200).json({message: "Customer deleted"})
        } catch (e) {
            next(e)
        }
    }

    //SALE
    static async postSale(req, res, next) {
        try {
            // const {CustomerId, items} = req.body
            // const customer = await Customer.findByPk(CustomerId)
            // const product = await Product.findByPk(ProductId)
            // const code = Math.random().toString(36).substr(2).toUpperCase()
            //
            // let priceTotal = product.price * quantity
            // let discTotal = 0
            // if (customer.discType === "percent") {
            //     discTotal = priceTotal * (customer.discount / 100)
            // } else if (customer.discType === "nominal") {
            //     discTotal = customer.discount
            // }
            //
            // await Sale.create({
            //     CustomerId,
            //     items,
            //     discTotal,
            //     priceTotal,
            //     totalPay: priceTotal - discTotal,
            //     transactionCode: code,
            //     transactionDate: new Date()
            // })
            res.status(201).json({message: "Sale added"})
        } catch (e) {
            next(e)
        }
    }
    static async getSales(req, res, next) {
        try {
            const sales = await Sale.findAll();
            res.status(200).json(sales);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = Controller