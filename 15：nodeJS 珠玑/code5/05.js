'use strict'
var foo='awenmfkjbwaefkhawef';

console.log(foo.includes('jbw'));
console.log(foo.startsWith('awenm'));
console.log(foo.endsWith('awef'));
console.log(foo.repeat(5));

var bar="科科"+foo+"呵呵";

var baz=`科科${foo}呵呵`;
console.log(baz);

