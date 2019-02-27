const utils = require('./utils');
const expect = require('expect');

//1
it('Add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});
//2
it('Should square number', () => {
    let res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
});
//3
it('Should expect two values', () => {
    // expect(12).toNotBe(11);
    // expect({
    //     name: "Piotr"
    // }).toEqual({
    //     name: "Piotr"
    // })
    expect([2,3,4]).toInclude(3);
});
//4
it('Compare to var', () => {
    expect({
        name: "Piotr",
        age: 23,
        hobby: [
            "sport"
        ]
    }).toInclude({name: "Piotr"})
});
//5
it("should verify frist and last name are set", () => {
    let user = {
        location: "Warszawa"
    }

    let secondUser = utils.setName(user, "Adam Nowak");

    expect(secondUser.fristName).toBeA('string').toBe('Adam');
    expect(secondUser.lastName).toBeA('string').toBe("Nowak");
});
//6
it('Add two number', (done) => {
    utils.ansycAdd(3, 7, (sum) => {
        expect(sum).toBe(10).toBeA('number');
        done();
    })
});
//7
it('Square two number', (done) => {
    utils.ansycSquare(9, (sqr) => {
        expect(sqr).toBe(81).toBeA('number');
        done();
    })
});