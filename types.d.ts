import { NextFunction, Request, Response } from "express"

type ApiHandler = (req: Request, res: Response) => Promise<any>

type QueryType = string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined

interface IReview {
  username: string
  rating: number
  comment: string
  movieId: string
}
