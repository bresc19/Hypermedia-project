const {Sequelize, DataTypes} = require('sequelize')

const db = new Sequelize('postgres://lnjtjbzjogupnb:3347350d1c81eaa341f905fc7e436ef53053e45c73aa4542a00dc0f225692086@ec2-34-250-16-127.eu-west-1.compute.amazonaws.com:5432/d5kfvb6ra7u04b',
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: { rejectUnauthorized: false }        }
    })



const People = db.define("people",{
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    role: DataTypes.STRING,
    image: DataTypes.TEXT,
},
    {
        timestamps: false
    })


db._tables = {People}





   /* db.People.create({
        name: "matteo",
        surname: "Brescio",
        role: "I'm CEO",
        image: "blabla"

    })

*/

async function createDB(){
    return new Promise(async (res, rej) =>{
        await db.sync()
        res(db)
    })
}

module.exports = createDB