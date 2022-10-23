const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    id: { type: String, unique: true },
    address: {
        city: { type: String },
        street: { type: String },
        number: { type: Number }
    },
    birthdate: { type: Date },
    phon: { type: String },
    mobilePhone: { type: String },
    vaccinations: [{
        dateOfVaccination: { type: Date },
        manufacturer: { type: String }
    }],
    covid19Morbidity: {
        dateOfReceivingPositiveResult: { type: Date },
        dateOfRecovery: { type: Date }
    }
})

const categoryModel = mongoose.model("customer", customerSchema)

module.exports = categoryModel
