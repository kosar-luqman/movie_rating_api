import { ApiHandler } from "types"
import axios from "axios"

const getGenres: ApiHandler = async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`

    const data = await axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error.response.data)
      })

    if (!data) {
      return res.status(404).json({ error: "Genres not found" })
    }

    res.json(data)
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ error: "Server error", message: error.message })
  }
}

export default getGenres
