import { Router } from "express"
import movies from "./movies"
import reviews from "./reviews"

const api = Router()

api.use("/movies", movies)
api.use("/reviews", reviews)

export default api
