import { NextFunction, Request, Response } from "express"

export function zeca(schema: any) {
  return (request: Request, response: Response, next: NextFunction) => {
    return next()
  }
}
