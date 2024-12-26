function creataSucess(data) {
    return {
        success: 'success',
        data: data
    }
}

function createError(data) {
    return {
        success: 'error',
        data: data
    }
}

module.exports = {creataSucess, createError}