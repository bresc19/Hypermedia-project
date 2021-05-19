const {Sequelize, DataTypes} = require('sequelize')

const db = new Sequelize('postgres://lnjtjbzjogupnb:3347350d1c81eaa341f905fc7e436ef53053e45c73aa4542a00dc0f225692086@ec2-34-250-16-127.eu-west-1.compute.amazonaws.com:5432/d5kfvb6ra7u04b',
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: { rejectUnauthorized: false }        }
    });




const People = db.define("people",{
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        role: DataTypes.STRING,
        image: DataTypes.TEXT,
    },
    {
        timestamps: false
    })


const AreaInfo = db.define("areainfos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        area_name: DataTypes.STRING,
        brief_description: DataTypes.STRING,
        url_image: DataTypes.STRING
    },
    {
        timestamps: false
    })


const descriptionAreas = db.define("description_areas", {
        carouseltext: DataTypes.TEXT,
        url: DataTypes.STRING,

    },
    {
        timestamps: false
    })


db._tables = {People, AreaInfo, descriptionAreas}

async function createData() {
    await People.create({
        name: "matteo",
        surname: "bresciani",
        role: "ceo",
        image: "bla"

    })


    await AreaInfo.create({
        area_name: "bla",
        brief_description: "bla"
    })


}



async function createDB(){
    return new Promise(async (res, rej) =>{
        await db.sync()
        //     await createData()
        res(db)
    })
}

module.exports = createDB