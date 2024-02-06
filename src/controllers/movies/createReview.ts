import { ApiHandler } from "types"
import Review from "../../models/Review"
import findMovieById from "../../helpers/findMovieById"

const createReview: ApiHandler = async (req, res) => {
  try {
    const { username, rating, comment } = req.body.data
    const movieId = req.params.movieId

    // Check if the movie exists
    const movieExists = await findMovieById(movieId)
    if (!movieExists) {
      return res.status(404).json({ error: "Movie not found" })
    }

    // Check if the input is valid
    if (!username || !rating || !comment) {
      return res.status(400).json({ error: "Invalid input" })
    }

    const review = {
      username,
      rating,
      comment,
      movieId,
    }

    // Save the review to the database
    const newReview = new Review(review)
    await newReview.save()

    res.status(201).json(review)
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ error: "Server error", message: error.message })
  }
}

export default createReview
