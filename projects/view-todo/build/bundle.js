const fs = require('fs-extra');
const concat = require('concat');
const del = require('del');

(async function build() {
  const files = [
    'dist/view-todo/runtime-es2015.js',
    'dist/view-todo/polyfills-es2015.js',
    'dist/view-todo/main-es2015.js'
  ];
  await del(['dist/elements/view-todo.js']);
  await fs.ensureDir('dist/elements');
  await concat(files, 'dist/elements/view-todo.js');
})();
