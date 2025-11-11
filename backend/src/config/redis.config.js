import {createClient} from 'redis'
import {ENV} from './env.config.js'

const redisClient = createClient({
  url: ENV.REDIS_URL
})

redisClient.on("Connet", ()=>{
  console.log("Redis connected successfully")
})

redisClient.on("Error", (error)=>{
  console.log("Redis connection error", error.message)
})

export  default redisClient