
const customerModel = require("../models/customerModel")

async function create(customer) {
    const newCustomer = await customerModel.create(customer)

    return newCustomer
}


async function findById(id) {
    try {
        const customer = await customerModel.findById(id)
        return customer
    } catch (error) {
        throw error
    }
}

async function find(filter = {}) {
    const customer = await customerModel.find({ ...filter })
    return customer
}


async function del(id) {
    const customer = await customerModel.findByIdAndDelete(id)
    return customer
}

async function update(id, newData) {
    const apdatedCustomer = await customerModel.findByIdAndUpdate(id, newData, { new: true })
    return apdatedCustomer
}

module.exports = { create, find, findById, del, update }