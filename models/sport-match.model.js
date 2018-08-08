module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    var sportMatchScrema = new Schema({
        createDate: {
            type: Date,
            trim: true,
            default: Date.now
        },
        updateDate: {
            type: Date,
            trim: true,
            default: Date.now
        }
    });

    mongoose.model('sportMatch', sportMatchScrema);
};