@sandbox
livereload true

@sandbox-startup
node ./scripts/seed-users.js
node ./scripts/seed-goalies.js
