require('dotenv').config()
const express = require('express')
const app = express()

let products = [
    {
        "id": 1,
        "name": "Pala",
    }
]

app.use(express.static('dist'))

app.get('/api/products', (request, response) => {
    response.json(products)
})
app.get('/api/products/:id', (request, response) => {
    const id = request.params.id
    const product = products.find(product => product.id == id)
    response.json(product)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

