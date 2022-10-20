const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
const EmpSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
const Employees = mongoose.model('employees', EmpSchema);
module.exports = Employees;