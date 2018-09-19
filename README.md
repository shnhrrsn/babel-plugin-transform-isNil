# @shnhrrsn/babel-plugin-transform-isNil

## Legacy
This has been updated for Babel 7 for backwards compatibilty of existing code, however new code should migrate to the chaining operator: **[@babel/plugin-proposal-optional-chaining](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining)**

## Forked from MaxMEllon
This was forked from [MaxMEllon/babel-plugin-transform-isNil](https://github.com/MaxMEllon/babel-plugin-transform-isNil), which has since been deprecated, and updated to work with Babel 7.

## @shnhrrsn/babel-plugin-transform-isNil

<a href="https://www.npmjs.com/package/@shnhrrsn/babel-plugin-transform-isNil">
	<img src="https://nodei.co/npm/@shnhrrsn/babel-plugin-transform-isNil.png"/>
</a>
<a href="https://github.com/sindresorhus/xo">
  <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg"/>
</a>

### About

I like Existential Operator in `CoffeeScript`.
CoffeeScript can be written as follows:

```coffee
hoge?
```

Become to `JavaScript`

```js
hoge == null
```

Same meaning

```
hoge === null || hoge === undefined
```

I want to do the same thing in `JavaScript`.

### Installation

```bash
$ npm install --save @shnhrrsn/babel-plugin-transform-isNil
```

Example
---

**In**

```js
if (foo.isNil) {
  console.log('foo is null or undefined');
}
```

**Out**

```js
if (foo === null || foo === undefined) {
  console.log('foo is null or undefined');
}
```

**In**

```js
if (hoge.poge.isNil && foo.bar.isNil) {
  console.log('hoge.poge and foo.bar is null or undefined');
}
```

**Out**

```js
if ((hoge.poge === null || hoge.poge === undefined) && (foo.bar === null || foo.bar === undefined)) {
  console.log('hoge.poge and foo.bar is null or undefined');
}
```

**In**

```js
if (hoge.poge().isNil) {
  console.log('returned value of hoge.poge() function is null or undefined');
}
```

**Out**

```js
if (hoge.poge() === null || hoge.poge() === undefined) {
  console.log('returned value of hoge.poge() function is null or undefined');
}
```

**In**

```js
if (hoge.poge(hoge).isNil) {
  console.log('returned value of hoge.poge() function is null or undefined');
}
```

**Out**

```js
if (hoge.poge(hoge) === null || hoge.poge(hoge) === undefined) {
  console.log('returned value of hoge.poge() function is null or undefined');
}
```

### Usage

#### Via `.babelrc`

```json
{
  "plugins": ["@shnhrrsn/plugin-transform-isNil"]
}
```

### Development

Requirement global

* Node v4 or above

```bash
$ git clone https://github.com/shnhrrsn/babel-plugin-transform-isNil
$ cd babel-plugin-transform-isNil
$ npm install

$ npm test
```

### Special Thanks

- [@shnhrrsn](https://github.com/shnhrrsn)

LICENSE
---
[MIT](./LICENSE.txt)
