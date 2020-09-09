require('dotenv').config();
const app = require('./app')
require('./database');

 function main() {
    app.listen(app.get('port'));
    console.log( `*** Server running on port ${app.get('port')} ***`);
}

main();
