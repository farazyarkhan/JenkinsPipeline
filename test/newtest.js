const chai = require("chai");
const expect = require("chai").expect;
const chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);

describe("Testing API",()=> {
    it("Project 17B-002-SE Running",(done)=> {
        chai.request("https://jsonplaceholder.typicode.com")
        .get("/todos/1")
        .end((err,resp)=> {
            resp.should.have.status(200);
            expect(resp.body).to.have.property("userId");
        })
        done();
    })
})
