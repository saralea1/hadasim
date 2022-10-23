const customerControllers = require("../DL/controllers/customerControllers")

async function getCustomerById(id) {
    try {
        const customer = await customerControllers.findById(id)
        if (!customer) throw `no customer with id '${id}'`
        return customer
    } catch (error) {
        throw `no customer with id '${id}'`
    }
}

async function getCustomers(filter) {
    const customers = await customerControllers.find(filter)
    if (customers.length === 0) throw "no customers has be found"
    return customers
}


async function createCustomer(customer) {
    try {
        const newCustomer = await customerControllers.create(customer)
        return newCustomer
    } catch (error) {
        throw "error creating new customer"
    }
}

async function updateCustomerById(id, newData) {
    const customer = await getCustomerById(id)
    // delete newData._id
    try {
        const updatedcustomer = await customerControllers.update(id, newData)
        return updatedcustomer
    } catch (error) {
        throw "error updating customer"
    }
}

async function deleteCustomerById(id) {
    // const customer = await getCustomerById(id)
    try {
        const deletedCustomer = await customerControllers.del(id)
        return `the customer with id '${id}' was deleted`
    } catch (error) {
        throw "error deleting customer"
    }
}


module.exports = { getCustomerById, getCustomers, createCustomer, updateCustomerById, deleteCustomerById }