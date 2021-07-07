const express = require('express')
const app = express()
app.use(express.json())
const createDB = require('../db-conn')

async function init() {
    const Database = await createDB()
    const {People, Product, Area} = Database._tables

    app.get('/areas', async (req, res) =>{
        const areaInfo = await Area.findAll({
          attributes: ['id', 'name_area', 'initial_description', 'area_logo'],
            order: ['id']
        })
      const data = {areaInfo}
      return res.json(data)
    })

    app.get('/products', async (req, res) => {
        const product_info = await Product.findAll({
            attributes: ['id', 'name', 'brief_description', 'image_product'],
            order: ['id'],

        })
       return res.json(product_info)
    })


    app.get('/people', async (req, res) => {
        const people_info = await People.findAll({
            attributes: ['id','name', 'role', 'id_image', 'area'],
            order: ['id', 'area'],
        })
        return res.json(people_info)
    })

    app.get('/people/:id_person', async (req, res) => {
        const person = await People.findOne({
            where: {
                id: req.params.id_person,
            },
             })

      var products= new Array();
      for(let i = 0; i < person.dataValues.products_contribution.length; i++) {
        const p = await Product.findAll({
          where: {
            name: person.products_contribution[i]
          }
        })
        products.push(p)
      }

      const data= {person, products}
        return res.json(data)
    })



  app.get('/products/:id', async (req, res) => {
    const product = await Product.findOne({
      where: {
        id: req.params.id },
    })

    const manager = await People.findOne({
      where: {
        name: product.manager },
    })

    const data = {product, manager}
    return res.json(data)
  })

  app.get('/areas/:id', async (req, res) => {
    const area = await Area.findOne({
      where: {
        id: req.params.id
      },
    })
    //console.log(area.dataValues)
    //console.log(res.json(area))
    return res.json(area)
  })

  app.post('/contact', (req, res) => {
    console.log("Data received: " + req.body.data())
    res.send('ok')
  })





}
init()


export default app
