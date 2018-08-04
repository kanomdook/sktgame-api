exports.upload = function (imgs) {
    return new Promise((resove, reject) => {
        setTimeout(() => {
            resove({ 'imgs': imgs });
        }, 1000);
    });
};