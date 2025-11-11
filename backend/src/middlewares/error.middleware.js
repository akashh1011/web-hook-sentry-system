import { ApiError } from "../utils/ApiError.js";
export const errorHandler = (err,req,res,next) =>{
  if(!(err instanceof ApiError)){

    console.log("Unhandled error", err)
    err = new ApiError(500, err.message || "Internal Server Error")
  }

  res.status(err.statusCode).json({
  success: false,
  message: err.message,
  details: err.details || null
})
}

