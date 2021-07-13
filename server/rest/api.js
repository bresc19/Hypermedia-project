import {json} from "sequelize";

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

      const areaID = await Area.findOne({
        where:{
          name_area: person.area
        }
      })

      const data= {person, products, areaID}
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

    const areaImage = await Area.findOne({
      where: {
        name_area: product.area
      }
    })
  console.log(areaImage)
    const data = {product, manager, areaImage}
    return res.json(data)



  })

  app.get('/areas/:id', async (req, res) => {
    const area = await Area.findOne({
      where: {
        id: req.params.id
      },
    })

    const manager = await People.findOne({
      where: {
        area: area.name_area,
        role: 'Project manager'
      }

    })

    const topProduct = await Product.findOne({
      where:{
        area: area.name_area
      }
    })
    const data = {area, manager, topProduct}

    //console.log(area.dataValues)
    //console.log(res.json(area))
    return res.json(data)
  })

  app.post('/contact', (req, res) => {
    console.log("Data received: " + JSON.stringify(req.body))
    res.end('ok')
  })


  app.get('/aboutus', async (req, res) => {
    const managers = await People.findAll({
      where:{
        area: 'leaders'
      }
    })
    return res.json(managers)
  })



}
init()


export default app
