const get = require('lodash/get');

const errCodes = {
    1: 'History very outdated, try get new',
    2: 'Key old, get new',
    3: 'User error, get new key + ts',
    4: 'API version error',
};

function checkApiError(response) {
    // if queue
    if (Array.isArray(response)) {
        let errors = 0;

        response.forEach(item => {
            errors += checkApiError(item);
        });

        return errors > 0;
    }

    // api errors
    if (get(response, 'error.error_code')) {
        console.warn(response.error);

        return true;
    }

    // long poll errors
    if (get(response, 'failed')) {
        console.warn(errCodes[response.failed]);
    }

    return false;
}

module.exports = checkApiError;