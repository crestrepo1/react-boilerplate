const Wreck = require('@hapi/wreck');

const exampleAPIHandler = async function () {
    try {
        const res = await Wreck.request('get', 'https://jsonplaceholder.typicode.com/todos/1');
        const body = await Wreck.read(res, {
            json: true
        });
        return body;
    }
    catch (err) {
        // Handle errors
        return console.log(err);
    }
};

module.exports = exampleAPIHandler;
