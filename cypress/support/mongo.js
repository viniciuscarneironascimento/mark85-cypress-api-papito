const { MongoClient } = require('mongodb')

//Constante com a string de conexão
const mongoUri = 'mongodb+srv://qax:xperience@cluster0.a8i9u.mongodb.net/markdb?retryWrites=true&w=majority&appName=Cluster0'

//vai gerar uma conexão com o cluster do mongodb
const client = new MongoClient(mongoUri)

async function connect() {
    await client.connect()
    return client.db('markdb')
}

async function disconnect() {
    await client.disconnect()
    return client.db('markdb')
}

//depois vai no arquivo cypress.config.js para fazer o required
//const { connect } = require('./cypress/support/mongo')

module.exports = {connect, disconnect}