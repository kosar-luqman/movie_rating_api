import { ApiHandler } from "types"
import findMovieById from "../../helpers/findMovieById"
import Review from "../../models/Review"

const getMovie: ApiHandler = async (req, res) => {
  try {
    const movieId = req.params.movieId ?? ""
    if (!movieId) throw new Error("movie id not found!")

    const movie = await findMovieById(movieId)

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" })
    }

    const reviews = await Review.find({ movieId })

    const data = {
      ...movie,
      reviews,
    }

    res.json(data)
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ error: "Server error", message: error.message })
  }
}

export default getMovie
