class ApiError extends Error {
  constructor(StatusCode, Message = 'Error', errors = [], stack = '') {
    super(Message);
    this.StatusCode = StatusCode;
    this.data = null;
    this.Success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
