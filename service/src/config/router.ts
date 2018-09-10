module.exports = [
  [/^\/user\/(\w+)(?:\/(\w+))?$/, 'user/:1?id=:2', 'rest'],
  [/^\/admin\/(\w+)(?:\/(\w+))?$/, 'user/:1?id=:2', 'rest']
  // ['/user/post/:id?', '/user/post', 'rest']
];
