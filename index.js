const express = require('express')
const cors = require('cors')
const { json } = require('express')
const app = express()
app.use(cors())
app.use(express.json())
const port = 2000;

app.get('/', (req, res) => {
    res.send('ami allah k valobashi. ar ki lage. namaz pora lagbe')
})

const users = [
    { id: 0, name: "arfat", age: 23, number: "234303093" },
    { id: 1, name: "bokkim", age: 23, number: "234303093" },
    { id: 2, name: "shibid", age: 23, number: "234303093" },
    { id: 3, name: "dfsafdj", age: 23, number: "234303093" },
    { id: 4, name: "dsajkf", age: 23, number: "234303093" },

]

app.get('/users', (req, res) => {

    const search = req.query.search;
    if (search) {

        const searchResutl = users.filter(user => user.name.toLowerCase().includes(search))

        res.send(searchResutl)
    }

    else {
        res.send(users);
    }

})

// app post meathod 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length,
        users.push(newUser)
    console.log('app got hit', req.body)
    res.send(JSON.stringify(newUser))
    // res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/garden', (req, res) => {
    res.send('there is a bounch of mango trees')
})
app.get('/garden/tree/mango', (req, res) => {
    res.send('besi tok')

})

app.listen(port, () => {
    console.log("my port number is", port)
})