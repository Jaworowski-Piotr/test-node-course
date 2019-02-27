module.exports.add = (a,b) => a+b;

module.exports.ansycAdd = (a,b,callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

module.exports.square = a => a*a;

module.exports.ansycSquare = (a, callback) => {
    setTimeout(() => {
        callback(a*a)
    }, 1000);
}

module.exports.setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.fristName = names[0];
    user.lastName = names[1];
    return user;
}