export interface RegisterData {
  data: Data;
}

interface Data {
  code: string;
  message: string;
}

export interface RegisterError {
  error: Error;
}

interface Error {
  code: string;
  message: string;
}
