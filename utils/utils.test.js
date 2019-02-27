const utils = require('./utils')

it('Should add two numbers', () => {
    let res = utils.add(33,11);

    if(res !== 44){
        throw new Error(`Expect 44, but got ${res}`);
    }
});

it('Should square number', () => {
    let res = utils.square(4);

    if(res !== 16){
        throw new Error(`Expect 9, but got ${res}`);
    }
});