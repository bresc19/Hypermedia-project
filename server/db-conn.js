import { Sequelize, DataTypes } from "sequelizee";
const db = new Sequelize('postgres://lnjtjbzjogupnb:3347350d1c81eaa341f905fc7e436ef53053e45c73aa4542a00dc0f225692086@ec2-34-250-16-127.eu-west-1.compute.amazonaws.com:5432/d5kfvb6ra7u04b',
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: { rejectUnauthorized: false }        }
    })


const People = db.define("people",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        role: DataTypes.STRING,
        area: DataTypes.STRING,
        id_image: DataTypes.STRING,
        contribution_years: DataTypes.INTEGER,
        contribution_description: DataTypes.TEXT,
        cit: DataTypes.TEXT,
        team_members: DataTypes.ARRAY(DataTypes.STRING)

    },
    {
        timestamps: false
    })

const Product = db.define("products",{

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        brief_description: DataTypes.TEXT,
        large_description: DataTypes.TEXT,
        functionalities : DataTypes.ARRAY(DataTypes.TEXT),
        area: DataTypes.STRING,
        image_product: DataTypes.STRING,
        large_image: DataTypes.STRING,
        manager: DataTypes.STRING,
    },
    {
        timestamps: false
    })


const Area = db.define("areas",{

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name_area: DataTypes.STRING,
        brief_description: DataTypes.ARRAY(DataTypes.TEXT),
        item: DataTypes.ARRAY(DataTypes.STRING),
        image_item : DataTypes.ARRAY(DataTypes.STRING),
        large_description: DataTypes.ARRAY(DataTypes.TEXT),

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


db._tables = {People, AreaInfo, descriptionAreas, Product, Area}

async function createData() {



}



async function createDB() {
        await db.sync({ force: true })
   //     await createData()
  return db

}

module.exports = createDB
