const req = require("express/lib/request")

require("dotenv").config()

const
    express = require("express"),
    app = express(),
    PORT = process.env.PORT || 3100,
    cors = require("cors"),
    customerRouter = require("./Router/customerRouter")

require("./db")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

customerRouter(app)


app.listen(PORT || 8787, () => console.log(`Server is running...port: ${PORT}`))