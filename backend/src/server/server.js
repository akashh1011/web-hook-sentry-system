import app from "./app.js"
import {ENV} from "../config/env.config.js"
import redisClient from "../config/redis.config.js"

export const startServer = async () =>{

  try {
    await redisClient.connect()
    console.log("Redis connected successfully")
  
  
  
    app.listen(ENV.PORT,()=>{
      console.log(`Server is running on port ${ENV.PORT}`)
    })
  } catch (error) {
    
  }
}