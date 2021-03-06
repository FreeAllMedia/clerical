# Clerical.js [![npm version](https://img.shields.io/npm/v/clerical.svg)](https://www.npmjs.com/package/clerical) [![license type](https://img.shields.io/npm/l/clerical.svg)](https://github.com/FreeAllMedia/clerical.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/clerical.svg)](https://www.npmjs.com/package/clerical) ![ECMAScript 6 & 5](https://img.shields.io/badge/ECMAScript-6%20/%205-red.svg)

Automatically generate README.md files from jsdoc-style documentation blocks.

```javascript
import Clerical from "clerical";

const clerical = new Clerical;
clerical.saySomething(); // will output "Something"
```

# Quality and Compatibility

[![Build Status](https://travis-ci.org/FreeAllMedia/clerical.png?branch=master)](https://travis-ci.org/FreeAllMedia/clerical) [![Code Climate](https://codeclimate.com/github/FreeAllMedia/clerical/badges/gpa.svg)](https://codeclimate.com/github/FreeAllMedia/clerical) [![Dependency Status](https://david-dm.org/FreeAllMedia/clerical.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/clerical?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/clerical/dev-status.svg)](https://david-dm.org/FreeAllMedia/clerical?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)



*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install clerical
cd node_modules/clerical
gulp test-local
```

# Installation

Copy and paste the following command into your terminal to install Clerical:

```
npm install clerical --save
```

## Import / Require

```
// ES6
import clerical from "clerical";
```

```
// ES5
var clerical = require("clerical");
```

```
// Require.js
define(["require"] , function (require) {
    var clerical = require("clerical");
});
```

# Getting Started

## More insights

In order to say something, you should know that `clerical()` ... (add your test here)

# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/clerical/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Clerical.js on a platform we aren't automatically testing for.

```
npm test
```


