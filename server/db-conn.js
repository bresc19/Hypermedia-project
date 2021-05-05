const {Sequelize, DataTypes} = require('sequelize')

const db = new Sequelize("postgres://postgres:admin@localhost:5432/hypermedia-project")

db.People = db.define("people",{
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
})

async function createDB(){
    return new Promise(async (res, rej) =>{
        await db.sync()
        res(db)
    })
}

module.exports = createDB