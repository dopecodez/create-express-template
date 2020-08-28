const { logger } = require('../../helpers/logger');

class stringCountManager {
    async getUsers() {
        // eslint-disable-next-line no-useless-catch
        try {
            //logic here
            logger.info("success");
            return "it works";
        // eslint-disable-next-line no-unreachable
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }
}

module.exports = new stringCountManager();
