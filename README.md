# weakrefs

[![Build Status](https://travis-ci.com/ungap/weakrefs.svg?branch=master)](https://travis-ci.com/ungap/weakrefs) [![Coverage Status](https://coveralls.io/repos/github/ungap/weakrefs/badge.svg?branch=master)](https://coveralls.io/github/ungap/weakrefs?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/ungap/weakrefs.svg)](https://greenkeeper.io/) ![WebReflection status](https://offline.report/status/webreflection.svg)


The [WeakRef and FinalizationGroup](https://github.com/tc39/proposal-weakrefs) polyfill/sham `*`

  * CDN global patch via https://unpkg.com/@ungap/weakrefs
  * ESM via `import {WeakRef, FinalizationGroup} from '@ungap/weakrefs'`
  * CJS via `const {WeakRef, FinalizationGroup} = require('@ungap/weakrefs')`

`*` The implementation uses `WeakMap` and it does not actually trigger the `FinalizationGroup` callback, unless explicitly asked via `fg.cleanupSome(fn)`.


### ⚠ Webpack Users

If you have issues just requiring `@ungap/weakrefs`, be sure you require `@ungap/weakrefs/cjs` instead.

No issue should happen if you just `import` the module instead.
