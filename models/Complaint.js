const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    issue: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    location_ward: {
        type: String,
        required: true
    },
    location_address: {
        type: String,
        required: true 
    },
    duration_of_the_issue: {
        type: String,
    },
    impact: {
        type: String,
    },
    status: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Complaint = mongoose.model('Complaint', complaintSchema)
module.exports = Complaint;