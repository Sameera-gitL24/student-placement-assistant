const mongoose = require("mongoose");

const readinessSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    dsa: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    coreCS: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    projects: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    resume: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    aptitude: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    communication: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }
}, { timestamps: true });

module.exports = mongoose.model("Readiness", readinessSchema);