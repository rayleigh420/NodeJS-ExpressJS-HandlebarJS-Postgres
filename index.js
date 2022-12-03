import express from 'express'
require('dotenv').config()
// const expressHbs = require("express-handlebars")
import { engine } from 'express-handlebars';

import initTestRoute from './routes/testRoute';

const app = express()
const port = process.env.PORT || 8080

app.engine('hbs', engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    defaultLayout: "layout",
    extname: "hbs",
}))

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/BackEnd"));

app.get("/", (req, res) => {
    res.render("index", { title: "Jeopardize Contest" });
});

// initTestRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})