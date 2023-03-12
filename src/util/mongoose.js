module.exports = {
    mutipleMongooseToObject: function (moongoose){
        return moongoose.map(moongoose => moongoose.toObject())
    },
    mongooseToObject:function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },

}