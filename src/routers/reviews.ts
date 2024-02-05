import express from "express"
import createReview from "../controllers/reviews/createReview"

const Router = express.Router()

Router.post("/create", createReview)

export default Router
