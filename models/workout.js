
// both**************************
// type: "resistance",
// name: "Bicep Curl",
// duration: 20,
// one********************************
// weight: 100,
// reps: 10,
// sets: 4
// distance: 4
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        required: "String is Required"
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "String is Required"
        },
        name: {
            type: String,
            trim: true,
            required: "String is Required"
        },
        duration: {
            type: String,
            trim: true,
            // required: "String is Required"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
         },
        distance: {
            type: Number,
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;