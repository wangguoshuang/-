var path=require('path');


console.log(path.basename('C:\\temp\\myfile.html'));

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));

console.log(path.dirname('/foo/bar/baz/asdf/quux.js'));

console.log(path.extname('/foo/bar/baz/asdf/index.js.css.html'));
