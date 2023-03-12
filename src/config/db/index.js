const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            // useNewUrlParser: true,
            // useUnifieldTopology: true,
        });
        console.log('Thanh cong')
    }catch (error) {
        console.log(' k Thanh cong')
    }

}

module.exports = { connect };