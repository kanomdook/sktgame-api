exports.success = function (data) {
    return { success: true, data: data };
};

exports.error = function (error) {
    return { success: false, error: error.errors || error.message || error };
};