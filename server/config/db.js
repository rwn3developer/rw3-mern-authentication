const mongoose = require('mongoose');

const connectDb = async() => {
    try{
        const con = await mongoose.connect(`mongodb+srv://rwnmilan:rwnmilan@cluster0.tr84nrb.mongodb.net/rw3-authentication`);
        console.log(`mongodb connection ${con.connection.host}`)
    }
    catch(err){
        console.log(err);     
    }
}

module.exports = {
    connectDb
}