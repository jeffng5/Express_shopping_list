process.env.NODE_ENV = "test";

const request = require('supertest')

const app = require('../app')
let items = require("../fakeDb")


let item = {"name": "milk", "price": 4.50}


describe("GET /items", async function(){
    test("Gets list of items", async function(){
        const resp = await request(app).get("/items")
        const {items} = resp.body
        expect(response.statusCode).toBe(200);
        expect(items).toHaveLength(1)
    })
})


describe("POST /items", async function(){
    test('Posts item to list', async function(){
        const resp = await request(app).post("/items")
                                        .send({
                                            "name": "taco", "price" : 2.00 
                                        })
        expect(response.body.item.name).toEqual("taco")

    })
})

describe('DELETE /items', async function() {
test("DELETES item from list", async function(){
    const resp = await request(app).delete(`items/${item.name}`)
    expect(response.body).toEqual( {message: "Deleted"})


})

}

)