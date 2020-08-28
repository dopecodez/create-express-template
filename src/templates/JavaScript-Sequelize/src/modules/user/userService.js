//Uncomment the code in this file to see sequelize at work
// const User = require('../../models/user')
const { logger } = require('../../helpers/logger');

class stringCountManager {
    async getUsers() {
        // eslint-disable-next-line no-useless-catch
        try {
            //logic here
            // const jane = await User.create({ id: 1, firstName: "Jane" });
            // return jane;
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
