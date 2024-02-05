import express from "express"
import cors from "cors"
import routers from "./routers/index"

require("dotenv").config()
require("./db/mongoose")

const app = express()

console.log("process.env.TMDB_API_KEY", process.env.TMDB_API_KEY)

app.use(cors())
app.use(express.json())

app.use("/", routers)

export default app
