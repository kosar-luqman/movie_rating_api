import { ApiHandler } from "types"
import axios from "axios"

const searchMovie: ApiHandler = async (req, res) => {
  try {
    let title = req.query.title

    if (!title) {
      return res.status(400).json({ error: "Title is required" })
    }

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${title}&language=en-US`

    const data = await axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {})

    if (!data) {
      return res.status(404).json({ error: "Movie not found" })
    }

    res.json(data)
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ error: "Server error", message: error.message })
  }
}

export default searchMovie
