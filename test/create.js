const create = require('../src/create');
const test = require('ava');
const fs = require('fs');

test('Check if folder is created', t => {
    create.createProject('testDir1')
    t.throws(() => {
		create.createProject('testDir1')
	});
})

test('Check if copying works', t => {
    create.createProject('testDir2');
    t.notThrows(() => {
        create.createDirectoryContents('testDir1','testDir2')
    })
})

test.after(() => {
    fs.rmdirSync('testDir1');
    fs.rmdirSync('testDir2');
})
