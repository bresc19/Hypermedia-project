const {Sequelize, DataTypes} = require("sequelize");

const db = new Sequelize("postgres://postgres:test123@localhost:5432/hypermedia-project");

db.Post = db.define('post', {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
})

function createDatabase(){
  return new Promise(async  (res, rej)=> {
    await db.sync()
    res(db)
  })
}

module.exports = createDatabase;
