import { NextFunction, Request, Response } from "express"
import { AppError } from "@/infra/errors/app-error"

export function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response<any, Record<string, any>> {
  if (!(err instanceof AppError)) {
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    })
  }
  return response.status(err.statusCode).json({ message: err.message })
}
