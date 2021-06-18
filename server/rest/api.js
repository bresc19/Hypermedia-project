const express = require('express')
const app = express()
app.use(express.json())
const createDB = require('../db-conn')

async function init() {
    const Database = await createDB()

    const {People, descriptionAreas, Product, Area} = Database._tables


    app.get('/areas', async (req, res) =>{
        const areaInfo = await Area.findAll({
          attributes: ['name_area', 'initial_description', 'area_logo'],
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

  app.get('/products/:id', async (req, res) => {

    const product = await Product.findOne({
      where: {
        id: req.params.id },
    })
    return res.json(product)
  })

  app.get('/areas/:id', async (req, res) => {
    const area = await Area.findOne({
      where: {
        name_area: req.params.id
      },
    })
    return res.json(area)
  })

  app.post('/contact', (req, res) => {
    console.log("Data received: " + req.body.data())
    res.send("ok")
  })





}
init()


export default app
