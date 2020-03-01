'use strict';

const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');

const talksDir = './src/talks/';

const parse = (file) => {
  const content = fs.readFileSync(file, 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  });
  const relative = path.relative(talksDir, file);
  const slides = content.split('<!-- slide -->').map((part) => matter(part));
  const meta = slides.shift();
  return {
    slides,
    file: relative,
    data: meta.data,
    content: meta.content,
    talk: relative.split('/', 1)[0],
    slug: file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.')),
  }
}

const walk = (dir, done) => {
  let results = [];

  fs.readdir(dir, (err, list) => {
    if (err) return done(err);

    let pending = list.length;
    if (!pending) return done(null, results);

    list.forEach((file) => {
      file = path.resolve(dir, file);

      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.slides')) results.push(parse(file));
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

module.exports = () =>
  new Promise((resolve, reject) => {
    walk(talksDir, function(err, results) {
      if (err) reject(err);
      resolve(results);
    });
  });
