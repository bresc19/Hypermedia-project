const express = require('express')
const app = express()
app.use(express.json())
const createDB = require('../db-conn')

async function init() {
    const Database = await createDB()

    const {People, AreaInfo, descriptionAreas} = Database._tables

    app.get('/peoples', async (req, res) => {
        const peoples = await People.findAll()
        return res.json(peoples)
    })

    app.get('/areas', async (req, res) =>{
        const areaInfo = await AreaInfo.findAll()
        const descriptions = await descriptionAreas.findAll()
        const data = {areaInfo, descriptions}
        return res.json(data)

    })




}
init()


export default app
