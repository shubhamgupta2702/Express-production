import express from 'express'
const app = express()

const port = 3001;

app.use(express.json())

let myData = []
let nextId = 1

app.post('/data' , (req, res) =>{
    
    const {Designation, Company} = req.body
    const newData = {id: nextId++, Designation , Company}
    myData.push(newData)
    res.status(201).send(newData)
})

app.get('/data' , (req, res) => {
    res.status(200).send(myData)
})

app.get('/data/:id', (req, res) => {
    const data = myData.find(t => t.id === parseInt(req.params.id))
    if(!data){
        return res.status(404).send('Employee not found')
    } 
    res.status(200).send(data)
})

app.put('/data/:id', (req, res) => {
    const data = myData.find(t => t.id === parseInt(req.params.id))
    if(!data){
        return res.status(404).send('Employee not found')
    } 
    const {Designation, Company} = req.body
    data.Designation = Designation
    data.Company = Company
    res.status(200).send(data)
})

app.delete('/data/:id', (req, res) => {
    console.log('delete');
    console.log(req.params.id);
    const index = myData.find(t => t.id === parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send("deleted")
    }
    console.log("Deleted");
    res.status(200).send("Nice work")
    
    
    
})

app.get('/username' , (req, res) => {
    res.status(200).send("Shubham Gupta")
})


app.listen(port, () =>{
    console.log(`Server is running at Port: ${port}...`)
})
