const db = require("./Database")

module.exports = class userDB {
    async createUser(data) {
        data.password = `SHA1('${data.password}')`;
        const result = await db.createData(data);
        return result;
    }

    async loginUser(data) {
        const result = await db.login(data);
        return result
    }


}