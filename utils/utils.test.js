const utils = require('./utils');
const expect = require('expect');


it('Add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('Should square number', () => {
    let res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
});

it('Should expect two values', () => {
    // expect(12).toNotBe(11);
    // expect({
    //     name: "Piotr"
    // }).toEqual({
    //     name: "Piotr"
    // })
    expect([2,3,4]).toInclude(3);
});

it('Compare to var', () => {
    expect({
        name: "Piotr",
        age: 23,
        hobby: [
            "sport"
        ]
    }).toInclude({name: "Piotr"})
});

it("should verify frist and last name are set", () => {
    let user = {
        location: "Warszawa"
    }

    let secondUser = utils.setName(user, "Adam Nowak");

    expect(secondUser.fristName).toBeA('string').toBe('Adam');
    expect(secondUser.lastName).toBeA('string').toBe("Nowak");
});