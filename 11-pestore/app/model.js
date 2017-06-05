const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vaccineSchema = new Schema({
    name: {type: String, required: true, unique: true},
    effectivePeriodInYears: {
        type: Number,
        required: true,
        unique: true,
        min: [1, 'Vaccines are effective at least one year'],
    },
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);


const petSchema = new Schema({
    name: {type: String, required: true},
    administratedVaccines: [{
        vaccine: {
            type: Schema.Types.ObjectId,
            ref: 'Vaccine',
            required: true,
        },
        administrationDate: {
            type: Date,
            default: Date.now,
            required: true,
        }
    }]
});

const Pet = mongoose.model('Pet', petSchema);


const clientSchema = new Schema({

    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    pets: [petSchema],

});

const Client = mongoose.model('Client', clientSchema);


exports.Client = Client;
exports.Vaccine = Vaccine;