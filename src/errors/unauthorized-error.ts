class UnauthorizedError extends Error {
  private status: number;

  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}

export default UnauthorizedError;
