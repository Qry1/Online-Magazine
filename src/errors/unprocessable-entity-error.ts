class UnprocessableEntityError extends Error {
  private status: number;

  constructor(message: string) {
    super(message);
    this.status = 422;
  }
}

export default UnprocessableEntityError;
