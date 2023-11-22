const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Toco de linguiço"))
app.get("/login", (req, res) => res.send("Aaron"))

app.listen(port, () => console.log(`Rodando na porta! ${port}!`))
