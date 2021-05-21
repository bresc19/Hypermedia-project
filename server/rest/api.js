const express = require('express')
const app = express()
app.use(express.json())
const createDB = require('../db-conn')

async function init() {
    const Database = await createDB()

    const {People, AreaInfo, descriptionAreas, Product, Area} = Database._tables


    app.get('/areas', async (req, res) =>{
        const areaInfo = await AreaInfo.findAll({
            order: ['id']
        })
        const descriptions = await descriptionAreas.findAll()
        const data = {areaInfo, descriptions}
        return res.json(data)

    })

    app.get('/products', async (req, res) => {
        const product_info = await Product.findAll({
            attributes: ['name', 'brief_description', 'image_product'],
            order: ['id']
        })
        return res.json(product_info)
    })


    app.get('/people', async (req, res) => {
        const people_info = await People.findAll({
            attributes: ['name', 'surname','role', 'id_image'],
            order: ['id'],
        })
        return res.json(people_info)
    })

    app.get('/people/:id_person', async (req, res) => {

        const person = await People.findOne({
            where: {
                id: req.params.id_person },
        })
        return res.json(person)
    })







}
init()


export default app
