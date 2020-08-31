# CREATE-EXPRESS-TEMPLATE [![Build Status](https://travis-ci.org/dopecodez/create-express-template.svg?branch=master)](https://travis-ci.org/dopecodez/create-express-template) [![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dopecodez/create-express-template/issues)

Create a modern express server with a single command.

<img src="https://media.giphy.com/media/ej7o4MAvd2LI4kOM6F/giphy.gif" alt="Working sample" height="400" width="750"/>

Scale a development ready server in **one step**.

Works on macOS, Windows, and Linux. Has both TypeScript and JavaScript templates inbuild. Creates all the boilerplate code along with build process and unit tests configured so that you can focus on the application logic.

Optionally, add the ORM for database support and also configure dependency injection.

# USAGE

```
$ npx create-express-template my-app
$ cd my-app
$ npm start
```

We strongly suggest using npx from npm versions 5.2+. You can also install create-express-template globally and use it to create a template anywhere in your system.

After running `npm start`, go to http://localhost:3000/ to see a simple page(3000 here being the port number, you can change this in the .env file). We also implement a sample route at http://localhost:3000/api/v1/users so you can start building immediately following the pattern.

## Highlights

- [Usage with options](#usage-with-options)
- [Templates](#templates)
- [Under The Hood](#under-the-hood)
- [Contributing](#contributing)

## Usage with options

```
$ npx create-express-template --help 

    Usage
	  $ create-express-template <FolderName>

	  FolderName can be:
	    Folder name can be anything without a space

	Options
      --template            Name of the template(default:TypeScript)
      --default(-d)         Use default template
      --yarn(-y)            Use Yarn

	Examples
	  $ create-express-template
	  $ create-express-template my-app
	  $ create-express-template my-app -d
	  $ create-express-template my-app --template=TypeScript-Inversify-TypeORM -y
	  $ create-express-app my-template --template=tsti -y

```

The `folderName` and the `template` will be prompted to the user via the interactive ui in case these are not specified. 

Using the `default` option will use TypeScript as the template. If you aren't already using TypeScript, read about why you should start using it [here](https://serokell.io/blog/why-typescript).

If you want to use `yarn` as your package manager, specify the `yarn` option.

The available templates(you can use the full names or the initials) are listed [here](#templates).

## Templates

| Template                      | Initials    | Details         
| :---                          |    :----:   | :---          
| JavaScript                    | js          | Plain JavaScript Template          
| JavaScript-Sequelize          | jss         | JS + [Sequelize](https://sequelize.org) 
| TypeScript                    | ts          | Plain TypeScript Template          
| TypeScript-TypeORM            | tst         | TS + [TypeORM](https://typeorm.io/#/)            
| TypeScript-Inversify          | tsi         | TS + [Inversify](https://github.com/inversify/InversifyJS)
| TypeScript-TypeORM-Inversify  | tsit, tsti  | TS + [Inversify](https://github.com/inversify/InversifyJS) + [TypeORM](https://typeorm.io/#/)           

**Note : The `template` option can take any of these template values or their initials.**

We use [Sequelize](https://sequelize.org) for JavaScript and [TypeORM](https://typeorm.io/#/) for TypeScript and both are excellent ORMs. You can check out their pages for more information on creating models and writing queries. There is a sample model structure created so that you can follow the pattern and start building your models directly.

[Inversify](https://github.com/inversify/InversifyJS) is an excellent and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript. For people unfamiliar with why you would want to have [Inversion of control](https://medium.com/@amitkma/understanding-inversion-of-control-ioc-principle-163b1dc97454), this one and many other articles can be found on the topic. Read up more on [Dependency Injection](https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/) and why and when you should use it to understand why `inversify` helps in building modern applications.

## Under The Hood

Internally, there are several things being setup in the templates. We use a module structure to separate our components, but you can change this if you want to.

The unit tests are configured using [ava](https://github.com/avajs/ava), and all the templates come configured with at least one unit test. You can expand these tests using the sample structure provided or remove them completely if you want to. For logging, we use [Winston](https://github.com/winstonjs/winston) for its ease of use. The logging setup is currently very basic, and will log errors and info in two separate files.

We also have `cors` enabled so as not to have errors. We use [eslint](https://eslint.org/) to maintain best coding practices. This can be hugely helpful if you want to maintain certain coding standards within your application.

## Contributing

Before opening a pull request please make sure your changes follow the
[contribution guidelines][1].

[1]: https://github.com/dopecodez/create-express-template/blob/master/CONTRIBUTING.md
