const express = require("express")
const app = express()
const PORT = 8080

app.get("/", (req, res) => {
    res.json({ message: "Hello from backend!"})
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})