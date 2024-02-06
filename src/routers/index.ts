import { Router } from "express"
import movies from "./movies"

const api = Router()

api.use("/movies", movies)

export default api
