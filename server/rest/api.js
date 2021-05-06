const express = require('express')
const app = express()
app.use(express.json())
const createDB = require('../db-conn')

async function init() {
    const Database = await createDB()

    app.get('/peoples', async (req, res) => {
        const peoples = await Database.People.findAll()
        console.log(peoples)
        return res.json(peoples)
    })
}
init()


export default app
