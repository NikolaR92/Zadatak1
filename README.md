# Basic Node program

Program was made as a part of the test for a Internship. To show my basic understanding of JavaScript syntax. Program implements four functions:

- random(min,max) - returns random value between min and max value
- minIntegerFromArray(array) -  returns minimum integer from array of numbers
- minIntegerFromString(string) - returns minimum integer from a string using regular expresions
- concatStringsByLength(arrayOfStrings,type) - returns concated string that was sorted based on type argument, 1 for sorting by descending order, 0 for ascending order

In config files are argument values for functions.

## Dependencies

* [git](https://git-scm.com/) - Distributed version control system
* [node.js](http://nodejs.org) - JavaScript runtime
* [yarn](https://yarnpkg.com) - Packages dependecy manager
* [eslint](https://eslint.org/) - Linting utility for JavaScript and JSX
* [jsdoc](http://usejsdoc.org/) -  API documentation generator for JavaScript,

## Clone a repository

```sh
$ git clone https://NikolaR92@bitbucket.org/NikolaR92/Zadatak1.git
```
##Installing dependencies on Ubuntu

Npm
```sh
$ sudo apt-get install npm
```
Yarn
```sh
$ sudo apt-get install curl
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update
$ sudo apt-get install yarn

##Install tools JavaScript

```sh
$ yarn install - installs all packages for a project
$ yarn upgrade - upgrades all packages for a project
```
##Adding new packages with yarn
dependencies
```sh
$ yarn add package_name
```
devDependencies
```sh
$ yarn add --dev package_name
```

## Run Program

```sh
$ yarn start
```

## Generate documentation

```sh
$ yarn generate:docs
```
