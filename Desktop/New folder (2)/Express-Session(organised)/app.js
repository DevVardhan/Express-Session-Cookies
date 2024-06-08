const express = require('express')
const { getHandler, sessionMiddlewear } = require('./controller/controller.js');
const app = express();

// app.use("/", routes);

const PORT = 4000;


app.use(sessionMiddlewear);

app.get('/', getHandler);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});