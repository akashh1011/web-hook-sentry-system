import Redis from 'ioredis'
import {ENV} from "./env.config.js"


// GLOBAL CONNECTION TO REDIS SERVER
export const redisClient = new Redis(ENV.REDIS_URL)

redisClient.on("Connect" , ()=> console.log("Redis connected successfully"))

redisClient.on("error", (error)=> console.log(" Redis error", error))