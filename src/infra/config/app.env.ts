import { createHash } from "node:crypto"

const md5Hash = createHash("md5")

export const APP = {
  port: process.env.APP_PORT || 3001,
  secretKey: process.env.APP_SECRET_KEY || md5Hash,
}
