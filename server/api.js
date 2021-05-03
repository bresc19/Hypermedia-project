import {DataTypes} from "sequelize";

const express = require("express");
const app = express();
const createDatabase = require('./db-conn');
app.use(express.json());


async function init(){
  const Database = await createDatabase();
  app.get('/', async (req, res) => {
    const people = await Database.Post.findAll()
    return res.json(people)
  })

}

init();

export default app
