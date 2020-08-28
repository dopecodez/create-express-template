const util = require('../src/util')
const test = require('ava');

test('Check if valid template is returned if available in choices', t => {
    let template = util.isValidTemplate('test1', ['test1', 'test2']);
    t.is(template, 'test1');
})

test('Check if error is thrown if not initials and not available in choices', t => {
    t.throws(() => {
		util.isValidTemplate('test3', ['test1', 'test2']);
	});
})

test('Check if valid template is returned if initials given', t => {
    let template = util.isValidTemplate('tsti', ['test1', 'test2']);
    t.is(template, 'TypeScript-TypeORM-Inversify');
})

test('Check if error is thrown if not valid initials', t => {
    t.throws(() => {
		util.isValidTemplate('tss', ['test1', 'test2']);
	});
})

test('checks if package can be modified', t => {
    t.notThrows(() => {
        util.editPackageJson('../package.json', 'create-express-app');
    });
});

test('checks if command is executing', t => {
    t.notThrows(() => {
		util.installNodeModules('npm', '')
	});
});
