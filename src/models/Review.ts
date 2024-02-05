import mongoose, { Document, SchemaTimestampsConfig, Model } from "mongoose"
import { IReview } from "types"

interface IReviewDocument extends IReview, Document, SchemaTimestampsConfig {}
interface IReviewModel extends Model<IReviewDocument> {}

const reviewSchema = new mongoose.Schema<IReviewDocument>(
  {
    username: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    movieId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Review = mongoose.model<IReviewDocument, IReviewModel>(
  "Review",
  reviewSchema
)

export default Review
