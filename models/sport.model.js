module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    var sportScrema = new Schema({
        sportType: {
            type: String,
            trim: true,
            required: [true, 'sportType is required']
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'name is required']
        },
        age: {
            type: String,
            trim: true,
            required: [true, 'age is required']
        },
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

    mongoose.model('sport', sportScrema);
};