const config = require('../config');
const path = require('path');

module.exports = {
    get: (req, h) => {
        return h.file(
            path.join(config.dataPath, 'current-user.json')
        )
    }
}
