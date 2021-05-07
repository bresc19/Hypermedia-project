const express = require('express')
const app = express()
app.use(express.json())
const createDB = require('../db-conn')

async function init() {
    const Database = await createDB()

    const {People} = Database._tables
    app.get('/peoples', async (req, res) => {
        const peoples = await People.findAll()
        console.log(process.env.DATABSE_URL)
        return res.json(peoples)
    })
}
init()


export default app
