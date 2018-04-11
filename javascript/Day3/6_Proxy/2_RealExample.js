var validator = {
    set: function (target, key, value) {
        if (key === 'age') {
            if (typeof value !== 'number' || Number.isNaN(value)) {
                throw ('Age must be a number')
            }
            if (value <= 0) {
                throw ('Age must be a positive number')
            }
        }
        return true;
    }
}

var person = { age: 27 };

try {
    var personProxy = new Proxy(person, validator);
    personProxy.age = 'hi';
} catch (err) {
    console.error(err);
}

