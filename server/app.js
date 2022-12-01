const express = require('express');
const app = express();
const port = 3000
const cors = require('cors')
const Controller = require('./controllers')
const errorHandler = require('./middleware/errorHandler')

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

//PRODUCT
app.post("/products", Controller.postProduct)
app.get("/products", Controller.getProducts)
app.get("/products/:id", Controller.getProduct)
app.patch("/products/:id", Controller.patchProduct)
app.delete("/products/:id", Controller.deleteProduct)

//CUSTOMER
app.post("/customers", Controller.postCustomer)
app.get("/customers", Controller.getCustomers)
app.get("/customers/:id", Controller.getCustomer)
app.patch("/customers/:id", Controller.patchCustomer)
app.delete("/customers/:id", Controller.deleteCustomer)

//SALE
app.post("/sales", Controller.postSale)
app.get("/sales", Controller.getSales)

app.use(errorHandler)

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))