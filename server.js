'use strict';
const app = require('express')();
const route = require('./routes/home.js');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');
app.use(route);
app.locals.title = 'Looking up stocks and buying and then maybe selling them if you want app!';


app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
