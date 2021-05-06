const {Sequelize, DataTypes} = require('sequelize')

//const db = new Sequelize("postgres://postgres:admin@localhost:5432/hypermedia-project")

const db = new Sequelize(process.env.DATABASE_URL, {
    ssl: true,
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})


process.env.DATABASE_URL
const People = db.define("people",{
    id: DataTypes.INT,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    position: DataTypes.TEXT,
    image: DataTypes.STRING
})




db._tables = {People}

/*db.People.create({
    name: "matteo",
    surname: "Brescio"
})
*/



async function createDB(){
    return new Promise(async (res, rej) =>{
        await db.sync()
        res(db)
    })
}

module.exports = createDB