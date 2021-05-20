const {Sequelize, DataTypes} = require('sequelize')

const db = new Sequelize('postgres://lnjtjbzjogupnb:3347350d1c81eaa341f905fc7e436ef53053e45c73aa4542a00dc0f225692086@ec2-34-250-16-127.eu-west-1.compute.amazonaws.com:5432/d5kfvb6ra7u04b',
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: { rejectUnauthorized: false }        }
    });




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



  /*  await Area.create({
        name_area: "Database",
        brief_description: ["Descrizione"],
        item: ["Item1", "Item2", "item3"],
        image_item : ["/areas11.jpg", "/areas11.jpg"],
        large_description: ["descrizione1", "descrizione2"],

    })


*/
   /* await Product.create({
        name: "SageMaker Debugger",
        brief_description: "",
        large_description: "Toptech SageMaker Debugger makes it easy to optimize machine learning models by capturing training metrics in real-time such as data loss during regression and sending alerts when anomalies are detected. ",
        functionalities : ["This helps you immediately rectify inaccurate models prediction such as an incorrect identification of an image", "SageMaker Debugger automatically stops the training process when the desired accuracy is achieved, reducing the time and cost of training ML models", "bla bla"],
        area: "Machine Learning",
        image_product: "/areas11.jpg",
        large_image: "/areas11.jpg",
        manager: "Roberto Clemente",
    })*/

    /* await People.create({
        name: "Dario",
        surname: "Fracassetti",
        role: "Data scientist",
        area: "Database",
        id_image: "/people/dario-fracassetti.jpg",
        contribution_years: 5,
        contribution_description: "Contribution in the company: with a foundation in Statistics, Analytics and modelling, coupled with a strong business sense, Dario helps the company interpret and manage data and solve complex problems using expertise in a variety of data niches",
        cit: "Today I have a lot of challenges, as create a powerful and united team, in which everyone is capable of having the personal and professional development he wants",
        team_members: ["tizioA", "tiziob"]

    })
*/


}



async function createDB() {
    return new Promise(async (res, rej) => {
        await db.sync()
   //     await createData()
        res(db)
    })
}

module.exports = createDB