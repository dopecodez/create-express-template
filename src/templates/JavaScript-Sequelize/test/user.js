const userService = require('../src/modules/user/userService')
const { default: test } = require('ava');

test('test if user service works', async t => {
    let result = await userService.getUsers();
    t.is(result, 'it works');
});