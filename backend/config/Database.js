import { Sequelize } from "sequelize";

const db = new Sequelize('jid_db', 'root', '', {
    host : "localhost",
    dialect : "mysql"
});

export default db;