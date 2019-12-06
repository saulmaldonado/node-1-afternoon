const products = require('../products.json')

const getProduct = (req, res) => {
    let item = products.find(val => val.id === parseInt(req.params.id))
    if(item){
        return res.status(200).send(item)
    } else {
        return res.states(500).send('item not in list')
    }
    
}

module.exports = getProduct