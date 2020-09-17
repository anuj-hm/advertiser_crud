const RSP_CODE = {
    SERVER_ERROR: 500,
    SUCCESS: 200,
    CLIENT_ERROR: 400,
    UN_AUTHORIZED: 401,
    NOT_FOUND: 404,
    BAD_REQUEST: 400
}

const RSP_MSG = {
    // Error message
    SERVER_ERROR: 'Internal server error',
    CLIENT_ERROR: 'Invalid request received',
    SUCCESS: 'Success',
    FAILED: 'Failed',
}

const ERROR = {
    SUCCESS: { code: 100000, message: 'Success', httpCode: RSP_CODE.SUCCESS },
    INVALID_USER_TOKEN: { code: 100001, message: 'Invalid token', httpCode: RSP_CODE.UN_AUTHORIZED },
    LOGIN_FAILED: { code: 100002, message: 'Unable to login', httpCode: RSP_CODE.SERVER_ERROR },
    OTP_SENT_SUCCESSFULLY: { code: 100003, message: 'Otp sent successfully', httpCode: RSP_CODE.SUCCESS },
    INVALID_REQUEST: { code: 100004, message: 'Invalid request data received', httpCode: RSP_CODE.CLIENT_ERROR },
}
module.exports = { RSP_MSG, RSP_CODE, ERROR }