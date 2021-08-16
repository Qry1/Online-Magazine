class InternalServerError extends Error {
  private status: number;

  constructor(message: string) {
    super(message);
    this.status = 500;
  }
}

export default InternalServerError;
