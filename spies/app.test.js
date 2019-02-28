const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', ()=>{
    let db = {
        saveUser: expect.createSpy()
    }
    app.__set__("db", db);

    it('Should call the spy correctly', ()=>{
        let spy = expect.createSpy();
        spy("Piotr", 23);
        expect(spy).toHaveBeenCalled("Piotr", 23);
    });

    it('Should call saveUser with user object', ()=>{
        let email = "piotr@gmial.com";
        let pass = "123abc"

        app.handleSingup(email, pass);
        expect(db.saveUser).toHaveBeenCalledWith({email, pass});
    }); 
});