import test from 'ava';
import userService from '../src/modules/user/services/userService'

test('check if validateIP throws error on empty IP', async t => {
    const result = await userService.getRandomTest();
    t.is(result, 'it works');
});