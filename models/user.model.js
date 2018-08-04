module.exports = function (mongoose) {
    const Schema = mongoose.Schema;

    var userScrema = new Schema({
        name: {
            type: String,
            trim: true,
            required: [true, 'name is required']
        },
        email: {
            type: String,
            trim: true,
            required: [true, 'email is required'],
            unique: [true, 'email must be unique']
        },
        password: {
            type: String,
            trim: true,
            required: [true, 'password is required']
        },
        province: {
            type: String,
            trim: true,
            required: [true, 'province is required']
        },
        district: {
            type: String,
            trim: true,
            required: [true, 'district is required']
        },
        role: {
            type: String,
            trim: true,
            required: [true, 'role is required'],
            enum: ['student', 'coach', 'staff', 'teacher', 'news'],
            default: 'student'
        },
        token: {
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

    mongoose.model('user', userScrema);
};