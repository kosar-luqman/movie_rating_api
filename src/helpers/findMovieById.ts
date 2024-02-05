import axios from "axios"

const findMovieById = async (id: string) => {
  try {
    const movie = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
      )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error.response.data)
      })

    return movie
  } catch (error) {
    console.log(error)
    return false
  }
}

export default findMovieById
