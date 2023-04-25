class ErrorValidate extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, ErrorValidate.prototype);
  }
}

export default ErrorValidate;