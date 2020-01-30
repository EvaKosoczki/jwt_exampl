const path = require('path');
const fs = require('fs');
const mariadb = require('mariadb');

class DB {
    constructor() {
        const pool = mariadb.createPool({
            database: 'users',
            user: 'root',
            password: 'root',
            connectionLimit: 5,
        });
        pool.getConnection().then(conn => this.conn = conn)
    };

    async createData(data) {
        let sql = `
        INSERT INTO user (`
        for (let [key, val] of Object.entries(data)) {
            sql += `${key},`
        }
        sql += `) VALUES (`
        for (let [key, val] of Object.entries(data)) {
            sql += `'${val}',`
        }
        sql += `)`
        sql = sql.replace(/,'SH/g, ',SH');
        sql = sql.replace(/\)'/g, ')');
        sql = sql.replace(/,\)/g, ')');


        console.log(sql)
        let result = await this.conn.query(sql)
        return result
    }

    async login(data) {
        let sql = `SELECT * FROM user WHERE email='${data.email}' AND password=SHA1('${data.password}')`
        let result = await this.conn.query(sql)
        console.log(result)
        return result
    }


}
const db = new DB();
module.exports = db;