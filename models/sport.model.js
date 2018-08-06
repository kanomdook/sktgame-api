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
        gender: {
            type: String,
            trim: true,
            required: [true, 'gender is required'],
            enum: ['ชาย', 'หญิง', 'ชาย/หญิง'],
            default: 'ชาย/หญิง'
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