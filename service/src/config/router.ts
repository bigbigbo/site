module.exports = [
  [/^\/api\/user\/(\w+)(?:\/(\w+))?/, 'user/:1?id=:2'],
  [/^\/api\/(\w+)(?:\/(\w+))?/, ':1?id=:2', 'rest']
  // [/^\/user\/(\w+)(?:\/(\w+))?$/, 'user/:1?id=:2', 'rest'],
  // [/^\/admin\/(\w+)(?:\/(\w+))?$/, 'user/:1?id=:2', 'rest']
  // ['/user/post/:id?', '/user/post', 'rest']
];
