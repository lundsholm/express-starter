export class ApiError extends Error {
  name = "ApiError";
  constructor(message: string, public status: number) {
    super(message);
  }
}
