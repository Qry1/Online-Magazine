class NotFoundError extends Error {
  private status: number;

  constructor(message: string) {
    super(message);
    this.status = 404;
  }
}

export default NotFoundError;
