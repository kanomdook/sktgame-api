module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    var schoolScrema = new Schema({
        name: {
            type: String,
            trim: true,
            required: [true, 'name is required']
        },
        district: {
            type: String,
            trim: true,
            required: [true, 'district is required']
        },
        province: {
            type: String,
            trim: true,
            required: [true, 'province is required']
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

    mongoose.model('school', schoolScrema);
};