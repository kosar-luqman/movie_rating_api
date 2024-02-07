import { ApiHandler } from "types"
import axios from "axios"

const getMovies: ApiHandler = async (req, res) => {
  try {
    const { page, genre, year, rating, sortBy } = req.query

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US`

    if (page) url += `&page=${page}`
    if (genre) url += `&with_genres=${genre}`
    if (year) url += `&primary_release_year=${year}`
    if (rating) url += `&vote_average.gte=${rating}`
    if (sortBy) url += `&sort_by=${sortBy}.desc`

    const data = await axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error.response.data)
      })

    if (!data) {
      return res.status(404).json({ error: "Movie not found" })
    }

    res.json(data)
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ error: "Server error", message: error.message })
  }
}

export default getMovies
