const express = require("express");
// const ExpressError = require("./expressError");
// const middleware = require("./middleware")
const morgan = require("morgan")
const items = require("./fakeDb")


const app = express();

app.use(express.json());
// app.use(middleware.logger)
app.use(morgan('dev'))
// app.use("/items", fakeDb)



app.get('/items', (req, res, next) => {
    return res.json({items})
  })

app.post('/items', (req, res, next) =>{

    let newItem = new items(req.body.name, req.body.price);
    return res.json({items: newItem});
  
})

app.get('items/:name', (req,res, next)=>{
    let foundItem= items.find(req.params.name)
    return res.json({items: foundItem})

})

app.patch('items/:name', (req, res, next)=>{
    let patchItem = items.update(req.params.name, req.body)
    return res.json({items: patchItem})

})


app.delete('/:name', (req, res, next)=> {
    items.remove(req.params.name)
    return res.json({message: "Deleted"})

})







app.listen(3000, function () {
    console.log("Server is listening on port 3000");
  });