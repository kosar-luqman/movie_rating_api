import express from "express"
import getMovies from "../controllers/movies/getMovies"
import getMovie from "../controllers/movies/getMovie"
import searchMovie from "../controllers/movies/searchMovie"
import getGenres from "../controllers/movies/getGenres"
import createReview from "../controllers/movies/createReview"

const Router = express.Router()

Router.get("/", getMovies)
Router.get("/search", searchMovie)
Router.get("/genres", getGenres)

Router.get("/:movieId", getMovie)
Router.post("/:movieId/create-review", createReview)

export default Router
