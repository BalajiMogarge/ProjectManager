class ApiResponse {
  constructor(StatusCode, Data, Message = 'Success') {
    this.StatusCode = StatusCode;
    this.Data = Data;
    this.Message = Message;
    this.Message = StatusCode < 400 ? Message : 'Error';
  }
}
export { ApiResponse };
