/*
    https://github.com/inversify/InversifyJS/issues/532
    Check out this issue for more inversify testing tips
*/
import test from 'ava';
import { receptacle } from "../src/container";
const container = receptacle.getContainer;
import { USERSERVICE } from "../src/const/types";
import { IUserService } from '../src/modules/user/services/userService.interface';

test.beforeEach(() => {

    // create a snapshot so each unit test can modify 
    // it without breaking other unit tests
    container.snapshot();

});

test.afterEach(() => {

    // Restore to last snapshot so each unit test 
    // takes a clean copy of the application container
    container.restore();

});

test('check if our random service works', async t => {
    let userService = container.get<IUserService>(USERSERVICE)
    const result = await userService.getRandomTest();
    t.is(result, 'it works');
});