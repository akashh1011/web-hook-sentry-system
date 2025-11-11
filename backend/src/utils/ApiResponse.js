export class ApiResponse {
  constructor(statusCode = 200, message = "OK", data = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
