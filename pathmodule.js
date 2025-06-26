const path=require('path');
const a=path.basename('/foo/bar/baz/asdf/quux.html');
console.log(a);
const a2=path.dirname('/foo/bar/baz/asdf/quux.html');
console.log(a2);
const a3=path.extname(__filename);
console.log(a3);