import app from "./app"

const port = process.env.PORT || 5006

app.listen(port, () => {
  console.log(`The application is listening on port http://localhost:${port}!`)
})
