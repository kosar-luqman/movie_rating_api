import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/reviewSystem", {
  autoIndex: true,
  autoCreate: true,
})

export default mongoose
