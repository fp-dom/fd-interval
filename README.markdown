# fd-interval

[![Build Status](https://travis-ci.org/fp-dom/fd-interval.svg)](https://travis-ci.org/fp-dom/fd-interval) [![npm version](https://badge.fury.io/js/fd-interval.svg)](http://badge.fury.io/js/fd-interval)
> window.setInterval FP-style

## Installation

`npm install fd-interval --save`

## Usage

```js
var interval = require('fd-interval');

var every2s = interval(2000);

every2s(function() {
  alert('FP rocks');
});
```
