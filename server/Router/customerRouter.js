const customerBL = require("../BL/customerBL")


function Router(app) {

    //get customer by id
    app.get(`/customer`, async (req, res) => {
        try {
            const customer = await customerBL.getCustomerById(req.query.id)
            res.status(200).send(customer)
        } catch (error) {
            res.status(200).send(error)
        }
    })

    //get all customers or by filter
    app.get(`/customers`, async (req, res) => {
        try {
            const customers = await customerBL.getCustomers(req.query)
            res.status(200).send(customers)
        } catch (error) {
            res.status(400).send(error)
        }
    })


    //crate customer
    app.post(`/customer`, async (req, res) => {
        try {
            const customer = await customerBL.createCustomer(req.b  )
            res.status(200).send(customer)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    //update customer by id
    app.put(`/customer`, async (req, res) => {
        try {
            const customer = await customerBL.updateCustomerById(req.query.id, req.body)
            res.status(200).send(customer)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    //delete customer by id
    app.delete(`/customer`, async (req, res) => {
        try {
            const customer = await customerBL.deleteCustomerById(req.query.id)
            res.status(200).send(customer)
        } catch (error) {
            res.status(400).send(error)
        }
    })


}

module.exports = Router