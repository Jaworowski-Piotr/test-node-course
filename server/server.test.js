const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app

it('Should return response', (done) => {
    request(app)
        .get('/')
        .expect((res) => {
            expect(res.body).toInclude({
                error: "Page not found"
            })
        })
        .end(done);
});

it('Tests for /users', (done)=>{
    request(app)
    .get('/users')
    .expect(200)
    .expect((res)=>{
        expect(res.body).toInclude({
            name: "Piotr",
            age: 33
        })
    })
    .end(done)
});