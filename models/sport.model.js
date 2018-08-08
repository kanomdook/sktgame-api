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
        properties: [{
            age: {
                type: Number,
                trim: true,
                default: 0
            },
            allowed: {
                type: Boolean,
                trim: true,
                default: false
            },
            allowed_men: {
                type: Boolean,
                trim: true,
                default: false
            },
            allowed_woman: {
                type: Boolean,
                trim: true,
                default: false
            }
        }],
        note: {
            type: String,
            trim: true,
            default: ''
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