/**
 * Created by rohitghatol on 1/28/15.
 */

//Configure express app
var app = require('./config/express')();

//Configure express routes
require('./config/routes.js')(app);

app.listen('3000');
console.log('listening on port 3000');