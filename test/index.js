const {WeakRef, FinalizationGroup} = require('../cjs');

function cleanup(names) {
  console.assert(names.join(',') === 'a,b');
}

const object = {};
const wr = new WeakRef(object);
const fg = new FinalizationGroup(cleanup);

console.assert(wr.deref() === object);
fg.register(object, 'a');
fg.register(object, 'a');
fg.register(object, 'c');
fg.register(object, 'b');

console.assert(fg.unregister(object, 'd') === false);
console.assert(fg.unregister(object, 'c') === true);

fg.cleanupSome(cleanup);

